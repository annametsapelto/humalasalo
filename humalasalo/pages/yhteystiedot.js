import Layout from '../Components/Layout';
import styles from './MainContent.module.css';
import Head from 'next/head';
import ContactInfo from '../Components/ContactInfo';

const Yhteystiedot = () => (
    <Layout>
      <Head>
        <title>Humalasalo Yhteystiedot</title>
      </Head>
      <div className={styles.main}>
        <h1>Yhteystiedot</h1>
            <p>Vastaamme mielellämme kysymyksiin, joita teille saattaa tulla meidän harrastamisestamme. 
              Tässä on lista meidän virkailijoistamme eli seuramme aktiiveista. 
              Jos asiasi koskee jotain tiettyä aihealuetta, kannattaa lähestyä suoraan kyseisen aihealueen asiantuntijaa, 
              mutta tarvittaessa ohjaamme kysymykset oikeaan suuntaan. 
              Meidän toiminnastamme tiedotamme tarkemmin sähköpostilistalla sekä Facebook-ryhmässä.</p>
            <ContactInfo 
            title="Vouti (Puheenjohtaja)"
            name="Erhart von Mannheim (Jarno Manninen)"
            email="Email: vouti@humalasalo.net"
            />
      </div>
    </Layout>

)
export default Yhteystiedot;