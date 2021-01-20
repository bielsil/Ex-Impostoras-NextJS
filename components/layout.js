import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import utilStyles from 'C:/Users/Gabriel Silva Lima/Documents/ADS/Ex Impostoras/nextjs-blog/styles/utils.module.css'

const name = 'Ex Impostoras'
export const siteTitle = 'Ex Impostoras'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/logo.png"
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/logo.png"
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Inicio</a>
          </Link>
        </div>
      )}
    </div>
  )
}