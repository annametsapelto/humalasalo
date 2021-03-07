import Layout from '../Components/Layout';
import LargePicture from '../Components/LargePicture';
import Head from 'next/head';
import styles from './MainContent.module.css';

const SCA = () => (
    <Layout>
      <Head>
        <title>Humalasalo SCA</title>
      </Head>
      <div className={styles.main}>
        <h1>Osana SCA:ta</h1>
        <p>Humalasalon pitäjä on osa kansainvälistä historianelävöittäjien verkostoa 
          nimeltään Society for Creative Anachronism Inc (SCA). SCA määrittää sitä, 
          miten seuran toiminta on järjestetty ja millaisia virkailijoita alueilla pitää olla. </p>
        <p>SCA, jota kutsutaan myös tapahtumissa nimellä ”Tunnettu maailma” (”The Known World”), 
          on jakautunut tällä hetkellä kahteenkymmeneen kuningaskuntaan. Eurooppa, 
          Lähi-Itä ja Etelä-Afrikka kuuluvat kaikki yhdessä Drachenwaldin kuningaskuntaan. 
          Kuningaskuntaa pyörittävät yhdistysvirkailijat sekä puolivuosittain turnajaisilla valittava kuningaspari, 
          joilla on pääosin seremoniallinen asema tapahtumissa. </p>
        <p>Kuningaskunnat jakautuvat ruhtinas- ja paronikuntiin. 
          Ruhtinaskuntaa johtaa turnajaisilla valittava ruhtinaspari, ja paronikuntaa vaaleilla valittava, 
          kuningasparin nimittämä paronipari. Suomi muodostaa Aarnimetsän paronikunnan. </p>
        <p>Ruhtinaskuntien ja paronikuntien alaisuudessa toimii paikallisyhdistyksiä eli pitäjiä, 
          jollainen Humalasalo eli Hämeen keskiaikaseura ry on. Meidän pitäjämme on lisäksi jakautunut 
          epävirallisiin kyliin, koska alueemme on melko laaja. Kylämme ovat Tammilinna Hämeenlinnassa, 
          Tervakannas Tampereella, Harjuvalkea Valkeakoskella sekä Sudenportti Lahdessa.</p>
        <LargePicture
            picture = "/images/sca-kaavio5.png"
            name = "Kaavio SCA: rakenteesta Humalasalon näkökulmasta."
        />
      </div>
    </Layout>

)
export default SCA;