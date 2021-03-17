import Layout from '../Components/Layout'; 
import Head from 'next/head';
import LargePicture from '../Components/LargePicture';
import styles from './MainContent.module.css';
 
 const Keikalle = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Keikalle</title>
      </Head>
      <div className={styles.main}>
        <h1>Keikalle</h1>
        <p>Hämeen keskiaikaseuraa voi kysyä erilaisiin esiintymistilaisuuksiin. 
          Olemme esiintyneet useilla eri historiallisilla markkinoilla, 
          muissa yleisissä tilaisuuksissa sekä myös yksityistilaisuuksissa. 
          Tyypillisimmät esitykset ovat tanssi- sekä taisteluesitykset. 
          Meillä ei ole tarkkaa hinnoittelua esityksille, vaan hinta sovitaan 
          tulijoiden määrän, esitysten pituuden, matkan pituuden sekä 
          esiintymistilaisuuden luonteen mukaan. Palkkiot käytetään seuran toiminnan edistämiseen. 
          Jos olette kiinnostuneet 
          kysymään meitä esiintymään tapahtumaanne, ottakaa hyvissä ajoin 
          yhteyttä puheenjohtajaamme
         sähköpostilla osoitteeseen vouti@humalasalo.net.</p>
      </div>
      <LargePicture 
          picture = "/images/tanssi2.jpg"
          name = "Piiritanssia järven rannalla."
      />
    </Layout>

)
export default Keikalle;