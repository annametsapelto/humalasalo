import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
 
 const Jasenyys = () => (
    <Layout>
      <Head>
        <title>Humalasalo Jäsenyys</title>
      </Head>
      <div className={styles.main}>
        <h1>Jäsenyys</h1>
        <p>Hämeen keskiaikaseuraan liitytään liittymällä Suomen keskiaikaseuraan. 
          Tulostettavan jäsenlomakkeen löydät täältä. Lomakkeesta valitaan paikallisyhdistykseksi Hämeen keskiaikaseura. 
          Keskiaikanimi ei ole pakollinen, jos sellaista ei ole ehtinyt itselleen kehittää. 
          Jäsenmaksu sisältää Suomen keskiaikaseuran oman julkaisun Aarniwalcean sekä Drachenwaldin eli Euroopan laajuisen 
          kuningaskunnan julkaisun Dragon’s Talen sähköisessä muodossa.
        </p>
        <p>Hämeen keskiaikaseura ei vaadi jäsenyyttä paikallistoiminnassa tai tapahtumissa, 
          mutta jäsenenä saat alennusta kaikkien Suomen keskiaikaseuran alaisten keskiaikatapahtumien tapahtumamaksuista. 
          Viikonlopputapahtumista alennus on tyypillisesti viisi euroa. Lisäksi vain maksaneet jäsenet lasketaan pitäjän varsinaisiksi asukkaiksi, 
          jotka saavat vaikuttaa seuran sisäisiin asioihin kuten paronillisten valintaan tai asettua itse ehdolle. 
        </p>
      </div>
    </Layout> 

)
export default Jasenyys;