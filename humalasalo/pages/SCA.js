import Layout from '../Components/Layout';
import LargePicture from '../Components/LargePicture';
import Head from 'next/head';
import styles from './MainContent.module.css';
import Kaavio from '../Components/Kaavio';

const SCA = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo SCA</title>
      </Head>
      <div className={styles.main}>
        <h1>Osana SCA:ta</h1>
        <p>Humalasalon pitäjä on osa kansainvälistä historianelävöittäjien verkostoa 
          nimeltään <a href="https://www.sca.org/" target="_blank"> Society for Creative Anachronism Inc (SCA)</a>. 
          SCA määrittää sitä, 
          miten seuran toiminta on järjestetty ja millaisia virkailijoita alueilla pitää olla. </p>
        <p>SCA, jota kutsutaan myös tapahtumissa nimellä ”Tunnettu maailma” (”The Known World”), 
          on jakautunut tällä hetkellä kahteenkymmeneen kuningaskuntaan. Eurooppa, 
          Lähi-Itä ja Etelä-Afrikka kuuluvat kaikki yhdessä 
          <a href="https://drachenwald.sca.org/#/" target="_blank"> Drachenwaldin kuningaskuntaan</a>. 
          Kuningaskuntaa pyörittävät yhdistysvirkailijat sekä puolivuosittain turnajaisilla valittava kuningaspari, 
          joilla on pääosin seremoniallinen asema tapahtumissa. </p>
        <p>Kuningaskunnat jakautuvat ruhtinas- ja paronikuntiin. 
          Ruhtinaskuntaa johtaa turnajaisilla valittava ruhtinaspari, ja paronikuntaa vaaleilla valittava, 
          kuningasparin nimittämä paronipari. Suomi muodostaa 
          <a href="https://www.aarnimetsa.org/" target="_blank"> Aarnimetsän paronikunnan</a>. </p>
        <p>Ruhtinaskuntien ja paronikuntien alaisuudessa toimii paikallisyhdistyksiä eli pitäjiä, 
          jollainen Humalasalo eli Hämeen keskiaikaseura ry on. Meidän pitäjämme on lisäksi jakautunut 
          epävirallisiin kyliin, koska alueemme on melko laaja. Kylämme ovat Tammilinna Hämeenlinnassa, 
          Tervakannas Tampereella, Harjuvalkea Valkeakoskella sekä Sudenportti Lahdessa.</p>
        <Kaavio
        />
        <p>Mitä tämä sitten käytännössä tarkoittaa Humalasalon asukkaille? 
          Humalasalo järjestää paikallista toimintaa, mutta me olemme tervetulleita kaikkiin SCA:n alaisiin tapahtumiin. 
          Jotta pysymme itsenäisenä pitäjänä, meidän kuuluu järjestää vähintään yksi virallinen tapahtuma vuodessa.
           Virallinen tapahtumasta tulee, kun sen tiedot julkaistaan kuningaskunnan tiedotuslehdessä Dragon’s Talessa 
           riittävän aikaisin. Näin kaikki kuningaskunnassa ovat tietoisia alueen tapahtumista. Useat humalasalolaiset 
           käyvätkin muissa Aarnimetsän pitäjien tapahtumissa säännöllisesti, mutta jonkin verran 
           matkustetaan myös muihin osiin kuningaskuntaa. </p>
        <p>Erityisesti kruununturnajaiset ja kruunajaiset ovat tapahtumia, jotka keräävät osallistujia ympäri Drachenwaldia. 
          Ne järjestetään eri puolilla kuningaskuntaa kiertävässä järjestyksessä. 
          Osallistuakseen turnajaisiin ehdokkaan kuuluu täyttää joukko kriteerejä, kuten kuulua johonkin SCA:n alaiseen seuraan,
           olla auktorisoitu johonkin SCA Heavy Combatin aseeseen ja olla osallistunut tiettyyn määrään tapahtumia lähiaikoina. 
           Turnajaisten voittajaparista tulee seuraavassa kruunajaistapahtumassa Drachenwaldin hallitsijapari seuraavaksi puoleksi vuodeksi.</p>
        <p>Vaikka kuningasparin valta on ennen kaikkea seremoniallista, ovat he näkyvä osa harrastustoimintaa samoin 
          kuin paikalliset ruhtinaalliset ja paronilliset. Seuralla on omia sisäisiä palkintojaan, joita kuninkaalliset voivat 
          jakaa tapahtumissa omasta päätöksestään tai suosittelujen perusteella. </p>
        <p>Aatelisarvo eli Award of Arms on näistä yleensä ensimmäisenä saatava tyypillisesti parin-kolmen 
          aktiivisen harrastusvuoden jälkeen. </p>
        <p>Erityisen arvostettuja ovat päärin arvonimet, joita on mahdollista saada, kun on panostanut runsaasti 
          johonkin erityisalaan harrastuksessa. Laakeriseppeleen voi saada paneutumisesta tieteisiin ja taiteisiin, 
          ritarin arvonimen ja valkoisen vyön taistelutaidoista ja pelikaanin arvonimen ahkerasta työstä seuran eteen.</p>
        <p>Siitä huolimatta, että meillä on seuran sisäinen arvojärjestys olemassa, oikeasti arvostamme jokaista jäsentä 
          yhtä paljon vasta-alkajasta vanhaan konkariin, sylilapsesta vanhukseen.</p>
        <p>Alla olevassa kuvassa on Aarnimetsän paronipari (syksystä 2017 syksyyn 2019) seurueineen.</p>
        <LargePicture
            picture = "/images/paronilliset.jpg"
            name = "Viisi keskiaikapukuista henkilöä ulkona kesällä, keskellä Aarnimetsän paronipari."
        />
      </div>
    </Layout>

)
export default SCA;