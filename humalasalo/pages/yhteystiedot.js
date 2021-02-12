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
            <p>Vastaamme mielellämme kysymyksiin, joita teille saattaa tulla harrastuksestamme. 
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
                name="Dubhghall MacÉibhearáird (Henri Laine)"
                email="Email: varavouti@humalasalo.net"
            />
            <ContactInfo 
                title="Rahainvartija (Rahastonhoitaja)"
                name="Humalasalon Tuikku (Tuikku Pirhonen)"
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
            <ContactInfo 
                title="Marski (Taisteluvastaava)"
                name="()"
                email="Email: marski@humalasalo.net"
            />
            <ContactInfo 
                title="Airut (Vaakuna- ja nimivastaava)"
                name="Joanne am Rein (Hanna Kivelä)"
                email="Email: airut@humalasalo.net"
            />
            <ContactInfo 
                title="Tiede- ja taideneuvos"
                name="()"
                email="Email: moas@humalasalo.net"
            />
            <ContactInfo 
                title="Tervakannaksen kylänvanhin (Tampereen paikallisvastaava)"
                name="()"
                email="Email: kv-tervakannas@humalasalo.net"
            />
            <ContactInfo 
                title="Tammilinnan kylänvanhin (Hämeenlinnan paikallisvastaava)"
                name="(Joni Karjalainen)"
                email="Email: kv-tammilinna@humalasalo.net"
            />
            <ContactInfo 
                title="Harjuvakean kylänvanhin (Valkeakosken paikallisvastaava)"
                name="Harjuvalkean Jaakko (Jaakko Voutilainen)"
                email="Email: kv-harjuvalkea@humalasalo.net"
            />
            <ContactInfo 
                title="Sudenportin kylänvanhin (Lahden paikallisvastaava)"
                name="()"
                email="Email: kv-sudenportti@humalasalo.net"
            />
            <ContactInfo 
                title="Tanssimestari"
                name="Adrian Möhkö (Atro Kajaste)"
                email="Email: tanssimestari@humalasalo.net"
            />
            <ContactInfo 
                title="Seitinkutoja (Web-vastaava)"
                name="Dianora del Bianco (Anna Metsäpelto)"
                email="Email: webvastaava@humalasalo.net"
            />
      </div>
    </Layout>

)
export default Yhteystiedot;