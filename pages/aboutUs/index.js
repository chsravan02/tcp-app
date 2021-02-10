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
          About us!
        </h1>


        <div className={styles.grid}>
          <h3>Is the children's place going out of business?</h3>
          <h5>The Children's Place: Approximately 200 locations of child clothing store The Children's Place will close this year and 100 more next year in Canada and the U.S., company executives said June 11 on an earnings call.</h5>
          <h3>Is Children's Place a good brand?</h3>
          <h5>This is a great store to get great prices sales at for children. They have fantastic sales on their children's and baby clothing. I love the quality of some of the brands they sell. This is a great store to get great prices sales at for children.</h5>
          <h3>Where is the Children's Place headquarters?</h3>
          <h2>Secaucus, NJ</h2>
          <h5>
            The Children's Place/Headquarters</h5>
          <h3>Who is the CEO of Children's Place?</h3>
          <h5>Jane T. Elfers (Jan 4, 2010–)
              The Children's Place/CEO</h5>
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
