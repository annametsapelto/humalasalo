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
              Meidän toiminnastamme tiedotamme tarkemmin sähköpostilistalla sekä <a href="https://www.facebook.com/groups/375781035887556" target="_blank">Facebook-ryhmässä</a>.</p>
            <ContactInfo 
                title="Vouti (Puheenjohtaja)"
                name="Erhart von Mannheim (Jarno Manninen)"
                email="Email: vouti@humalasalo.net"
            />
            <ContactInfo 
                title="Varavouti (Varapuheenjohtaja)"
                name="(Henri Laine)"
                email="Email: varavouti@humalasalo.net"
            />
            <ContactInfo 
                title="Rahainvartija (Rahastonhoitaja)"
                name="(Tuikku Pirhonen)"
                email="Email: rahainvartija@humalasalo.net"
            />
            <ContactInfo 
                title="Kastellaani (Jäsenvastaava)"
                name="Dianora del Bianco (Anna Metsäpelto)"
                email="Email: kastellaani@humalasalo.net"
            />
            <ContactInfo 
                title="Jousimarski (Jousiammuntavastaava)"
                name="Anneke Alfintytär Lindu (Anne Syrjä)"
                email="Email: jousimarski@humalasalo.net"
            />
      </div>
    </Layout>

)
export default Yhteystiedot;