import Layout from '../Components/Layout'; 
import Head from 'next/head';
import styles from './MainContent.module.css';
 
 const Keikalle = () => (
    <Layout>
      <Head>
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
          esiintymistilaisuuden luonteen mukaan. Jos olette kiinnostuneet 
          kysymään meitä esiintymään tapahtumaanne, ottakaa hyvissä ajoin 
          yhteyttä puheenjohtajaamme
         sähköpostilla osoitteeseen vouti@humalasalo.net.</p>
      </div>
    </Layout>

)
export default Keikalle;