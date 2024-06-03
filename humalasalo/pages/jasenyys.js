import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
import LargePicture from '../Components/LargePicture';
import SmallPicture from '../Components/SmallPicture';
import Link from 'next/link';
 
 const Jasenyys = () => (
    <Layout>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Jäsenyys</title>
      </Head>
      <div className={styles.main}>
        <h1>Jäsenyys</h1>
        <SmallPicture
            picture = "/images/divider01.png"
            name = "Ritarijänis"
        />
        <p>Hämeen keskiaikaseuraan liitytään liittymällä Suomen keskiaikaseuraan. 
          Tulostettavan jäsenlomakkeen löydät <Link href="https://www.aarnimetsa.org/keskiaikaseura-yhdistyksena/lomakkeet/" target="_blank">täältä</Link>. Lomakkeesta valitaan paikallisyhdistykseksi Hämeen keskiaikaseura. 
          Keskiaikanimi ei ole pakollinen, jos sellaista ei ole ehtinyt itselleen kehittää.
        </p>
        <p>Hämeen keskiaikaseura ei edellytä jäsenyyttä paikallistoiminnassa tai tapahtumissa, 
          mutta jäsenenä saat alennusta kaikkien Suomen keskiaikaseuran alaisten keskiaikatapahtumien tapahtumamaksuista. 
          Viikonlopputapahtumista alennus on tyypillisesti viisi euroa. Lisäksi vain maksaneet jäsenet lasketaan pitäjän varsinaisiksi asukkaiksi, 
          jotka saavat vaikuttaa seuran sisäisiin asioihin kuten paronillisten valintaan tai asettua itse ehdolle. 
        </p>
        <LargePicture 
            picture="/images/ruoka2.jpg"
            name="Ruokaa, ruoka-astioita ja juoma-astioita nurmikolla."
        />
      </div>
    </Layout> 

)
export default Jasenyys;
