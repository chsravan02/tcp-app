import Head from 'next/head'
import Link from 'next/link'
import "antd/dist/antd.css"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>

        <p className={styles.description}>
          Get started
        </p>

        <div className={styles.grid}>
          <a href="/home" className={styles.card}>
            <h3>Home   </h3>
          </a>
          <a href="/aboutUs" className={styles.card}>
            <h3>About us   </h3>
          </a>
          <a href="/products" className={styles.card}>
            <h3>Products   </h3>
          </a>
          <a href="/contactUs" className={styles.card}>
            <h3>Contact us   </h3>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          footer
        </a>
      </footer>
    </div>
  )
}
