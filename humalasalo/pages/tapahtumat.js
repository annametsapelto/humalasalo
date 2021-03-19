import Layout from '../Components/Layout';
import LargePicture from '../Components/LargePicture';
import Head from 'next/head';
import styles from './MainContent.module.css';
import Link from 'next/link';

const Tapahtumat = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Tapahtumat</title>
      </Head>
      <div className={styles.main}>
        <h1>Tapahtumat</h1>
        <p>Tapahtumat ovat yksi asia meidän toimintamme keskiössä. 
          Seuran viralliset tapahtumat voi Aarnimetsän (Suomen) 
          alueella jakaa kahteen ryhmään eli viikonlopputapahtumiin 
          leirikeskuksissa sekä leiritapahtumiin eli käytännössä 
          Nuijasotaan. Lisäksi osaa keskiaikamarkkinoita voi pitää 
          eräänlaisina epävirallisina tapahtumina.
        </p>
        <h3>Viikonlopputapahtumat</h3>
        <p>Aarnimetsän alueella järjestetään suunnilleen kerran kuukaudessa 
          viikonlopputapahtuma jossakin leirikeskuksessa. 
          Yleensä tapahtumat kestävät perjantai-illasta sunnuntaihin puoleen päivään. 
          Tänä aikana elävöitämme keskiaikaa eli pukeudumme ajanmukaisiin vaatteisiin, 
          käytämme aikaamme ajanmukaisissa ajanvietteissä kuten turnajaisissa, jousiammunnassa, 
          käsitöissä, musisoinnissa ja tanssissa. Keittiön vapaaehtoiset kokkaavat ajanmukaista 
          ruokaa, joka lauantai-iltana nautitaan yleensä usean kattauksen pitojen muodossa. 
          Useissa tapahtumissa paikalle tulleet kuninkaalliset tai paronilliset pitävät hovin, 
          jossa he jakavat palkintoja ansioituneille harrastajille. </p>
        <p>Osalla tapahtumista on erillisiä teemoja kuten tanssi, musiikki, 
          käden taidot tai taistelutaidot, mutta seuran kannalta tärkeimpiä tapahtumia ovat kruununturnajaiset, 
          kruunajaiset sekä investituura (investituurassa vaihtuvat hallitsevat paronilliset). 
          Kruununturnajaiset ja kruunajaiset järjestetään kiertävästi ympäri eri Drachenwaldin 
          osia puolivuosittain eli aina silloin tällöin myös Aarnimetsässä, ja investituura 
          joka toinen vuosi alkusyksystä Aarnimetsän alueella. </p>
        <p>Virallisten tapahtumien tiedot julkaistaan seuran lehdissä Aarniwalceassa ja 
          Dragon’s Talessa. Niistä myös selviää ilmoittautumisaika ja -tapa, joka yleensä on 
          sähköinen ilmoittautumislomake verkossa. Tapahtumiin on rajallinen määrä paikkoja tiloista johtuen, 
          joten monet tapahtumat täyttyvät nopeasti. Tapahtumista kerätään tapahtumamaksu, 
          joka pyritään pitämään mahdollisimman tarkasti tilavuokran, ruokien ja muiden tarvikkeiden kokoisena. 
          Tapahtumat järjestetään vapaaehtoisvoimin. Tapahtuman pääjärjestäjää kutsutaan autokraatiksi, 
          mutta varsinkin suuremmissa tapahtumissa heitä voi olla useampi. Keittiöstä vastaa pääkokki, 
          jolla voi olla useita apulaisia. Useimmissa tapahtumissa vapaaehtoiset voivat tehdä erilaisia 
          aputöitä kasvisten kuorimisesta saunan lämmitykseen.</p>
        <p>Osallistujat tuovat mukanaan omat ajanmukaiset vaatteensa ja astiansa, 
          mutta niiden puutteen ei tarvitse olla este tapahtumaan osallistumiselle, 
          vaan useimmissa tapauksissa niitä saa lainaan, kunhan asiasta puhuu ajoissa autokraatin kanssa.</p>
          <h3><Link href="/tapahtumainfo"><a>Lisää tietoa tapahtumiin osallistumisesta</a></Link></h3>
        <LargePicture
          picture = "/images/pitopöydässä.jpg"
          name = "Pitopöydässä."
        />
        <h3>Leiritapahtumat</h3>
        <p>Aarnimetsässä järjestetään tällä hetkellä yksi vuosittainen leiritapahtuma eli Nuijasota, 
          mutta vastaavia tapahtumia on kesäkaudella useampia ympäri Drachenwaldia. 
          Nuijasota on kaksi viikonloppua ja niiden välisen viikon kestävä tapahtuma, 
          jossa elävöitetään keskiaikaa. Viikonlopputapahtumista poiketen suurin osa osallistujista 
          yöpyy ajanmukaisissa teltoissa. Tapahtuman pitkän keston vuoksi siellä järjestetään usean 
          päivän mittaisia työpajoja, useita pitoja, useita hoveja sekä monenlaisia turnajaisia ja kilpailuja. 
          Sauna lämpenee joka ilta ja järvessä voi käydä uimassa tai soutelemassa. 
          Tapahtumaan ei ole pakko osallistua koko ajaksi, vaan siellä voi käydä vaikka vain yhden päivän ajan. 
          Tähänkin tapahtumaan ilmoittaudutaan sähköisesti ja samalla pitää ilmoittaa, haluaako tapahtuman 
          tarjoamat ruoat, joita ei valitettavasti riitä kaikille osallistujille. Tapahtuma-alueelta löytyy pari 
          modernia keittiötä ruoanlaittoon, mutta monet laittavat ruokaa avotulella omissa leireissään.</p>
        <p>Nuijasodassa on aivan erityinen tunnelmansa, joten se on monen aarnimetsäläisen vuoden kohokohta.
           Myös monet muut Drachenwaldin asukkaat ovat todenneet saman, joten tapahtuma on varsin kansainvälinen.</p>
        <LargePicture
            picture = "/images/nuijasotaleiri.jpg"
            name = "Nuijasotaleiri iltaruskossa."
        />
        <h3>Markkinat</h3>
        <p>Keskiaikamarkkinat eivät ole virallisia seuran tapahtumia, mutta me käymme useilla markkinoilla 
          esiintyjinä tai elävöittäjinä. Meillä saattaa olla esimerkiksi tanssi- tai taistelunäytöksiä, 
          mutta usein olemme paikalla tuomassa tunnelmaa omassa leirissämme, kuljeksimassa markkinaväen 
          tai vaikka tekemässä käsitöitä linnassa. Vaikka markkinakojuissa myydään paljon modernejakin tavaroita, 
          niiltä voi tehdä jonkin verran kivoja löytöjä, joita ei muuten pääse hypistelemään, sillä monia 
          harrastukseemme sopivia esineitä ei juuri myydä kivijalkaliikkeissä.</p>
        <p>Yleensä seurojen leireihin markkinoille on ilmoittautumiset verkossa hyvissä ajoin ennen tapahtumaa. 
          Vaatimuksena tyypillisesti on vähintään vahtivuoro leirissä tai mahdollisella esittelypöydällä.</p>
        <LargePicture
          picture = "/images/markkinoilla.jpg"
          name = "Historiallisilla markkinoilla esittelypöydän äärellä."
        />
      </div>
    </Layout>
)

export default Tapahtumat;