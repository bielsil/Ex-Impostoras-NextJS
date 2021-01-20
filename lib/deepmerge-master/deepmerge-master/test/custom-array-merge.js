var merge = require('../')
var test = require('tape')

test('custom merge array', function(t) {
	var mergeFunctionCalled = false
	function overwriteMerge(target, source, options) {
		mergeFunctionCalled = true
		t.equal(options.arrayMerge, overwriteMerge)

		return source
	}
	const destination = {
		someArray: [ 1, 2 ],
		someObject: { what: 'yes' },
	}
	const source = {
		someArray: [ 1, 2, 3 ],
	}

	const actual = merge(destination, source, { arrayMerge: overwriteMerge })
	const expected = {
		someArray: [ 1, 2, 3 ],
		someObject: { what: 'yes' },
	}

	t.ok(mergeFunctionCalled)
	t.deepEqual(actual, expected)
	t.end()
})

test('merge top-level arrays', function(t) {
	function overwriteMerge(a, b) {
		return b
	}
	var actual = merge([ 1, 2 ], [ 1, 2 ], { arrayMerge: overwriteMerge })
	var expected = [ 1, 2 ]

	t.deepEqual(actual, expected)
	t.end()
})

test('cloner function is available for merge functions to use', function(t) {
	var customMergeWasCalled = false
	function cloneMerge(target, source, options) {
		customMergeWasCalled = true
		t.ok(options.cloneUnlessOtherwiseSpecified, 'cloner function is available')
		return target.concat(source).map(function(element) {
			return options.cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	var src = {
		key1: [ 'one', 'three' ],
		key2: [ 'four' ],
	}
	var target = {
		key1: [ 'one', 'two' ],
	}

	var expected = {
		key1: [ 'one', 'two', 'one', 'three' ],
		key2: [ 'four' ],
	}

	t.deepEqual(merge(target, src, { arrayMerge: cloneMerge }), expected)
	t.ok(customMergeWasCalled)
	t.ok(Array.isArray(merge(target, src).key1))
	t.ok(Array.isArray(merge(target, src).key2))
	t.end()
})
