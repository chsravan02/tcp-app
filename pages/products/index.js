import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;
export default function AboutUs() {
  const handleTabChange = () => {

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Product's
        </h1>


        <div className={styles.tabs}>
          <Tabs defaultActiveKey="1" onChange={handleTabChange()} centered>
            <TabPane tab="Girl" key="1">
              The Children's Place
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div><img width="300px" src='https://assets.theplace.com/image/upload/t_clp_img2_m,f_auto,q_auto/ecom/assets/content/tcp/us/dlp/GIRL/020221/girl-1.jpg'></img></div>
                <div><img width="300px" src='https://assets.theplace.com/image/upload/t_clp_img2_m,f_auto,q_auto/ecom/assets/content/tcp/us/dlp/GIRL/020221/girl-5.jpg'></img></div>
                <div><img width="300px" src='https://assets.theplace.com/image/upload/t_clp_img2_m,f_auto,q_auto/ecom/assets/content/tcp/us/dlp/GIRL/020221/girl-6.jpg'></img></div>
              </div>
            </TabPane>
            <TabPane tab="Boy" key="2">
              Boys Tab
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div><img width="300px" src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/2/AmazonStores/ATVPDKIKX0DER/4a6ccee366d07c3b4b5b408a1e2c8fb9.w750.h750._CR0%2C0%2C750%2C750_SX320_SY320_.jpg'></img></div>
                <div><img width="300px"  src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/2/AmazonStores/ATVPDKIKX0DER/4a6ccee366d07c3b4b5b408a1e2c8fb9.w750.h750._CR0%2C0%2C750%2C750_SX320_SY320_.jpg'></img></div>
                <div><img width="300px" src='https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/a/AmazonStores/ATVPDKIKX0DER/0c475527db6f7aaec14989f8b8c3d85e.w750.h750._CR0%2C0%2C750%2C750_SX375_SY375_.jpg'></img></div>
              </div>

            </TabPane>
            <TabPane tab="Clearance" key="3">
              Clearance Tab
              <div>

                <div class="text-box">
                  <h2 class="light">ALL CLEARANCE</h2>
                  <h2 class="black">60-80% OFF</h2>
                  <h2 class="light">NO EXCLUSIONS!</h2>
                  <p class="subtext">Prices shown reflect savings.</p>
                </div>
                <div>
                  <h3>KIDS CLEARANCE CLOTHES</h3>
                  <h5>Get big deals on all your favorite kids clothes, with clearance clothes from The Children's Place. Enjoys savings and take advantage of all our baby and kids clearance clothes, with something for everyone.</h5>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div><img width="300px" src='https://api.getcandid.com/image/s/candid.azureedge.net%2fstream-media%2f070167ca-8287-4d41-a9bb-6b3850cae9b1_17865811451286898_low.jpg?w=254'></img></div>
                  <div><img width="300px" src='https://api.getcandid.com/image/s/candid.azureedge.net%2fstream-media%2f070167ca-8287-4d41-a9bb-6b3850cae9b1_17869491836169040_low.jpg?w=254'></img></div>
                  <div><img width="300px" src='https://api.getcandid.com/image/s/candid.azureedge.net%2fstream-media%2f070167ca-8287-4d41-a9bb-6b3850cae9b1_17888677606844647_low.jpg?w=254'></img></div>
                </div>
              </div>

            </TabPane>
          </Tabs>

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
