import Layout from '../Components/Layout';
import styles from './MainContent.module.css';
import Head from 'next/head';
import ContactInfo from '../Components/ContactInfo';
import SmallPicture from '../Components/SmallPicture';

const Yhteystiedot = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Yhteystiedot</title>
      </Head>
      <div className={styles.main}>
        <h1>Yhteystiedot</h1>
        <SmallPicture
            picture = "/images/divider03.png"
            name = "Soturi ja etana"
        />
            <p>Vastaamme mielellämme kysymyksiin, joita teille saattaa tulla harrastuksestamme. 
              Tässä on lista meidän virkailijoistamme eli seuramme aktiiveista. 
              Jos asiasi koskee jotain tiettyä aihealuetta, kannattaa lähestyä suoraan kyseisen aihealueen asiantuntijaa, 
              mutta tarvittaessa ohjaamme kysymykset oikeaan suuntaan. 
              Meidän toiminnastamme tiedotamme tarkemmin <Link href="http://humalasalo.net/mailman/listinfo/tiedotuslista_humalasalo.net"> sähköpostilistalla</Link> sekä <Link href="https://www.facebook.com/groups/375781035887556" target="_blank">Facebook-ryhmässä</Link>.</p>
            <ContactInfo 
                title="Vouti (Puheenjohtaja)"
                pic = "/images/seneschal-small.png"
                picName = "Voudin vaakuna"
                name="Erhart von Mannheim (Jarno Manninen)"
                email="Email: vouti@humalasalo.net"
            />
            <ContactInfo 
                title="Varavouti (Varapuheenjohtaja)"
                pic = "/images/humalasalodeviceplain.png"
                picName = "Humalasalon vaakuna"
                name="Anneke Alfintytär Lindu (Anne Syrjä)"
                email="Email: varavouti@humalasalo.net"
            />
            <ContactInfo 
                title="Rahainvartija (Rahastonhoitaja)"
                pic = "/images/exchequer-small.png"
                picName = "Rahainvartijan vaakuna"
                name="Humalasalon Tuikku (Tuikku Pirhonen)"
                email="Email: rahainvartija@humalasalo.net"
            />
            <ContactInfo 
                title="Kastellaani (Jäsenvastaava)"
                pic = "/images/chatelaine-small.png"
                picName = "Kastellaanin vaakuna"
                name="Dianora del Bianco (Anna Metsäpelto)"
                email="Email: kastellaani@humalasalo.net"
            />
            <ContactInfo 
                title="Jousimarski (Jousiammuntavastaava)"
                pic = "/images/archery-small.png"
                picName = "Jousimarskin vaakuna"
                name="Anneke Alfintytär Lindu (Anne Syrjä)"
                email="Email: jousimarski@humalasalo.net"
            />
            <ContactInfo 
                title="Marski (Taisteluvastaava)"
                pic = "/images/heavy-small.png"
                picName = "Marskin vaakuna"
                name="Oliver of Harjuwalcea (Olli Leimu)"
                email="Email: marski@humalasalo.net"
            />
            <ContactInfo 
                title="Airut (Vaakuna- ja nimivastaava)"
                pic = "/images/herald-small.png"
                picName = "Airueen vaakuna"
                name="Maria Lorenza da Poppi (Ida Perälä)"
                email="Email: airut@humalasalo.net"
            />
            <ContactInfo 
                title="Tiede- ja taideneuvos"
                pic = "/images/a&s-small.png"
                picName = "Neuvoksen vaakuna"
                name="()"
                email="Email: moas@humalasalo.net"
            />
            <ContactInfo 
                title="Tervakannaksen kylänvanhin (Tampereen paikallisvastaava)"
                pic = "/images/humalasalodeviceplain.png"
                picName = "Humalasalon vaakuna"
                name="Ósk Grimsdóttir (Onerva Leisti)"
                email="Email: kv-tervakannas@humalasalo.net"
            />
            <ContactInfo 
                title="Tammilinnan kylänvanhin (Hämeenlinnan paikallisvastaava)"
                pic = "/images/humalasalodeviceplain.png"
                picName = "Humalasalon vaakuna"
                name="Markus Bucht (Jukka Viitanen)"
                email="Email: kv-tammilinna@humalasalo.net"
            />
            <ContactInfo 
                title="Harjuvakean kylänvanhin (Valkeakosken paikallisvastaava)"
                pic = "/images/humalasalodeviceplain.png"
                picName = "Humalasalon vaakuna"
                name="Harjuvalkean Jaakko (Jaakko Voutilainen)"
                email="Email: kv-harjuvalkea@humalasalo.net"
            />
            <ContactInfo 
                title="Sudenportin kylänvanhin (Lahden paikallisvastaava)"
                pic = "/images/humalasalodeviceplain.png"
                picName = "Humalasalon vaakuna"
                name="()"
                email="Email: kv-sudenportti@humalasalo.net"
            />
            <ContactInfo 
                title="Tanssimestari"
                pic = "/images/humalasalodeviceplain.png"
                picName = "Humalasalon vaakuna"
                name="Adrian Möhkö (Atro Kajaste)"
                email="Email: tanssimestari@humalasalo.net"
            />
            <ContactInfo 
                title="Seitinkutoja (Web-vastaava)"
                pic = "/images/web-small.png"
                picName = "Seitinkutojan vaakuna"
                name="Dianora del Bianco (Anna Metsäpelto)"
                email="Email: webvastaava@humalasalo.net"
            />
      </div>
    </Layout>

)
export default Yhteystiedot;