import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome To Home TCP
        </h1>

        <p className={styles.description}>
          Get started
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Boys  </h3>
          </a>
          <a className={styles.card}>
            <h3>Girls  </h3>
          </a>
          <a className={styles.card}>
            <h3>Childrens  </h3>
          </a>
          <a className={styles.card}>
            <h3>Outerwear  </h3>
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
