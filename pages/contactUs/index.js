import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact us!
        </h1>


        <div className={styles.grid}>
          <h3>
            The Children's Place Inc. is an American specialty retailer of children’s apparel and accessories. The company also markets apparel under the Children's Place, Place, Baby Place, and Gymboree brand names. Wikipedia
          </h3>
          <h3><b>Customer service:</b> 1 (877) 752-2387</h3>
          <h3><b>Stock price:</b> PLCE (NASDAQ) $74.60 +1.32 (+1.80%) Feb 5, 4:00 PM EST - Disclaimer</h3>
          <h3><b>CEO:</b> Jane T. Elfers (Jan 4, 2010–)</h3>
          <h3><b>Headquarters:</b> Secaucus, NJ</h3>
          <h3><b>Number of locations:</b> 1,085 stores at United States, Canada, Puerto Rico (2015) and 90 international stores</h3>
          <h3><b>Founded:</b> 1969</h3>
          <h3><b>Revenue:</b> 1.871 billion USD (2019)</h3>
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
