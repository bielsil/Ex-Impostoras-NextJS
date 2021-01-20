import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from 'C:/Users/Gabriel Silva Lima/Documents/ADS/Ex Impostoras/nextjs-blog/lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React from 'react'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <a>Blog</a>
        <a href="/Contato">Contato</a>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      <footer>
      <p>
        <a href="https://www.instagram.com/eximpostoras/?hl=pt-br">
        <img src="https://instagram.fbhz8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/119381356_363756831450146_3008355575418576013_n.jpg?_nc_ht=instagram.fbhz8-1.fna.fbcdn.net&_nc_ohc=Z8D6lz8JQfYAX-iNRF2&tp=1&oh=e318a68bd667782f059e2f4024bbc5dd&oe=5FFF388E" alt="Instagram" width="32" height="32">
        </img>
        </a>
        <a href="https://www.linkedin.com/company/eximpostoras/">
        <img src="https://instagram.fbhz8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47585231_2232577283698140_4919498885648351232_n.jpg?_nc_ht=instagram.fbhz8-1.fna.fbcdn.net&_nc_ohc=ncemyr4PITcAX81gZwf&tp=1&oh=dbfcf86fe8f3d601881c6c89a8a30bcf&oe=6001CE13" alt="LinkedIn" width="32" height="32">
        </img>
        </a>
        </p>
      </footer>
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}