import Layout from '../Components/Layout';
import styles from './MainContent.module.css';
import Head from 'next/head';
import ContactInfo from '../Components/ContactInfo';

const Yhteystiedot = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Yhteystiedot</title>
      </Head>
      <div className={styles.main}>
        <h1>Yhteystiedot</h1>
            <p>Vastaamme mielellämme kysymyksiin, joita teille saattaa tulla harrastuksestamme. 
              Tässä on lista meidän virkailijoistamme eli seuramme aktiiveista. 
              Jos asiasi koskee jotain tiettyä aihealuetta, kannattaa lähestyä suoraan kyseisen aihealueen asiantuntijaa, 
              mutta tarvittaessa ohjaamme kysymykset oikeaan suuntaan. 
              Meidän toiminnastamme tiedotamme tarkemmin <a href="http://humalasalo.net/mailman/listinfo/tiedotuslista_humalasalo.net"> sähköpostilistalla</a> sekä <a href="https://www.facebook.com/groups/375781035887556" target="_blank">Facebook-ryhmässä</a>.</p>
            <ContactInfo 
                title="Vouti (Puheenjohtaja)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Erhart von Mannheim (Jarno Manninen)"
                email="Email: vouti@humalasalo.net"
            />
            <ContactInfo 
                title="Varavouti (Varapuheenjohtaja)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Dubhghall MacÉibhearáird (Henri Laine)"
                email="Email: varavouti@humalasalo.net"
            />
            <ContactInfo 
                title="Rahainvartija (Rahastonhoitaja)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Humalasalon Tuikku (Tuikku Pirhonen)"
                email="Email: rahainvartija@humalasalo.net"
            />
            <ContactInfo 
                title="Kastellaani (Jäsenvastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Dianora del Bianco (Anna Metsäpelto)"
                email="Email: kastellaani@humalasalo.net"
            />
            <ContactInfo 
                title="Jousimarski (Jousiammuntavastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Anneke Alfintytär Lindu (Anne Syrjä)"
                email="Email: jousimarski@humalasalo.net"
            />
            <ContactInfo 
                title="Marski (Taisteluvastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Oliver of Harjuwalcea (Olli Leimu)"
                email="Email: marski@humalasalo.net"
            />
            <ContactInfo 
                title="Airut (Vaakuna- ja nimivastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Joanne am Rein (Hanna Kivelä)"
                email="Email: airut@humalasalo.net"
            />
            <ContactInfo 
                title="Tiede- ja taideneuvos"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="()"
                email="Email: moas@humalasalo.net"
            />
            <ContactInfo 
                title="Tervakannaksen kylänvanhin (Tampereen paikallisvastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Ósk Grimsdóttir (Onerva Leisti)"
                email="Email: kv-tervakannas@humalasalo.net"
            />
            <ContactInfo 
                title="Tammilinnan kylänvanhin (Hämeenlinnan paikallisvastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="(Joni Karjalainen)"
                email="Email: kv-tammilinna@humalasalo.net"
            />
            <ContactInfo 
                title="Harjuvakean kylänvanhin (Valkeakosken paikallisvastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Harjuvalkean Jaakko (Jaakko Voutilainen)"
                email="Email: kv-harjuvalkea@humalasalo.net"
            />
            <ContactInfo 
                title="Sudenportin kylänvanhin (Lahden paikallisvastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="()"
                email="Email: kv-sudenportti@humalasalo.net"
            />
            <ContactInfo 
                title="Tanssimestari"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Adrian Möhkö (Atro Kajaste)"
                email="Email: tanssimestari@humalasalo.net"
            />
            <ContactInfo 
                title="Seitinkutoja (Web-vastaava)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Dianora del Bianco (Anna Metsäpelto)"
                email="Email: webvastaava@humalasalo.net"
            />
      </div>
    </Layout>

)
export default Yhteystiedot;