import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';

const Toiminta = () => (
    <Layout>
      <Head>
        <title>Humalasalo Toiminta</title>
      </Head>
      <div className={styles.main}>
        <h1>Toiminta</h1>
        <p className = "huom">HUOM! Koronaviruspandemian vuoksi 
        kaikki toimintamme on joko tauolla tai siirtynyt verkkoon. </p>
        <p>Pitäjämme on tunnettu kukoistavista tieteistään ja taiteistaan, 
          taitavista jousiampujistaan, jaloista asetöiden taitajistaan sekä heraldiikan 
          salat tuntevista airuistaan. Eikä puutu joukostamme oivia pitokokkeja tai 
          musikanttejakaan! Niin on myös ehtymätön intomme oppia uutta, 
          jakaa oppimaamme ja iloita yhdessä uusista taidoistamme. </p>
        <p>Humalasalossa on monenlaista paikallistoimintaa ja erilaisia harrastuspiirejä. 
          Pitäjän toiminnan sydän ovat torstaitapaamiset. Torstaitapaamisten lisäksi 
          säännöllisesti taitojaan pääsee hiomaan jousiammunnan, hovitanssien sekä kalpamiekkailun parissa. 
          Järjestämme myös kursseja ja/tai työpajoja eri aiheista kiinnostuksen mukaan. 
          Paikallistoimintaan kaikki ovat tervetulleita aivan omana itsenään ilman mitään 
          ennakkotietoja tai varusteita. Paikallistoimintaan osallistuminen on helpoin tapa 
          päästä mukaan uuteen harrastukseen ja tutustua uusiin ihmisiin. </p>
        <p>Toiminnasta tiedotetaan seuran sähköpostilistalla (linkki) sekä Facebookissa  
          <a href="https://www.facebook.com/groups/375781035887556"> Humalasalon pitäjä -ryhmässä</a>. </p>
        <h3>Torstaitapaamiset</h3>
          <ul>
            <li>Aika: joka kuukauden 2. ja 4. torstai n. klo 17-20.</li>
            <li>Paikka: tyypillisesti Märtan ja Lucaksen luona Takahuhdissa. Tarkemman osoitteen saa sähköpostitse.</li>
            <li>Kuka: vapaat kaikille, tule tutustumaan!</li>
            <li>Hinta: ilmainen, nyyttärituomiset tervetulleita.</li>
            <li>Yhteystiedot: kastellaani@humalasalo.net tai vouti@humalasalo.net.</li>
            <li>Huom! Tapaamisista ilmoitetaan seuran sähköpostilistalla (http://www.humalasalo.net/membership.html) 
              ja näistä tiedotteista selviää esim. tapaamisen mahdollinen teema, aika ja paikka.</li>
          </ul>
          <p>Torstaitapaamiset ovat Humalasalon sydän. Torstaitapaamisissa pääsemme tapaamaan toisiamme, 
            jakamaan tietojamme ja oppimaan uutta. Vaikka tapaamiset ovat hyvin vapaamuotoisia, niillä voi olla jokin teema,
            tarjolla voi olla esimerkiksi esitelmä tai voimme työstää yhdessä jotain pitäjän projektia. 
            Tapaamisiin mukanaan jokainen voi tuoda oman projektinsa, pyytää apua tai vinkkejä, tutustua seuran kirjastoon, 
            osallistua mahdolliseen yhteiseen ohjelmaan tai tulla vain seurustelemaan muiden kanssa, kuulemaan uusimmat kuulumiset 
            ja tutustumaan uusiin ihmisiin.</p>
          <p>Torstaitapaamisia järjestetään joka kuun toinen ja neljäs torstai. Torstaitapaamisten aika, 
            paikka ja mahdollinen ohjelma ilmoitetaan seuran sähköpostilistalla sekä Facebook-ryhmässä.</p>
          <h3>Hovitanssit</h3>
          <ul>
            <li>Aika: keskiviikkoisin klo 18-20</li>
            <li>Paikka: Tammelakeskuksen iso sali, Itsenäisyydenkatu 21 B, Tampere</li>
            <li>Kuka: vapaat kaikille</li>
            <li>Hinta: ilmainen</li>
            <li>Yhteystiedot: atro.kajaste@iki.fi</li>
          </ul>
          <p>Tanssi oli tärkeä osa keskiajan ja renessanssin hovielämää niin osana juhlallisuuksia kuin ylhäisön huvituksenakin. 
            Tuon ajan tanssit ovat säilyneet meidän päiviimme tanssimestareiden 1400-1500-luvuilla kirjoittamissa tanssioppaissa. 
            Seuramme tanssijat harjoittelevat viikoittain tansseja halki Euroopan hovien ja esiintyvät markkinoilla sekä muissa tilaisuuksissa.</p>
          <p>Keskiajan ja renessanssin hovitansseja tanssitaan Tampereella Tammelakeskuksen isossa salissa osoitteessa 
            Itsenäisyydenkatu 21 B (sisäänkäynti sisäpihan puolelta terveyskeskuksen liukuovista) keskiviikkoisin klo 18-20. 
            Aikaisempaa tanssikokemusta, omaa paria tai pinkeitä tanssitrikoita ei tarvita. Pehmeät tanssitossut ja juomapullo kannattaa ottaa mukaan. 
            Perusteita harjoitellaan aina tarvittaessa, joten mukaan voi tulla milloin vain. Tanssiharjoitukset ovat ilmaiset. 
            Lisää tietoa tanssiharjoituksista saa tanssimestari Adrian Möhköltä (Atro Kajaste) osoitteesta atro.kajaste@iki.fi.</p>
          <h3>Jousiammunta</h3>
          <ul>
            <li>Aika: vuorot tauolla koronaviruspandemian takia</li>
            <li>Paikka: Toijalan Monitoimihalli, Köyvärintie 3, Akaa</li>
            <li>Kuka: vapaat kaikille, myös aloittelijat tervetulleita</li>
            <li>Hinta: 2€/kerta/hlö, tutustumiskerta ilmainen</li>
            <li>Yhteystiedot:  jousimarski@humalasalo.net (Jousimarskit Jon Knutsson (Petteri Hoisko) ja Anneke Alfintytär Lindu (Anne Syrjä)</li>
            <li>Huom! Treeneistä (ja niiden peruuntumisista) tiedotetaan <a href="https://www.facebook.com/groups/323373527762775/">Aarnimetsän jousikomppanian Facebook-ryhmässä</a></li>
          </ul>
          <p>Humalasalon jousiammuntaharjoituksissa ammutaan pitkäjousilla ja vastakaarijousilla. 
            Reeneissä ammutaan sekä vapaamuotoisesti että pikku kisoja ja hieman skenaariomaisesti joitakin asioita harjoitellen. 
            Täysin aloittelijoita myös opastetaan tarpeen mukaan ja lainakamojakin löytyy. Perusammunnan ohella reenaillaan myös SCA:n paria 
            ammuntaa eli Portsmouth Roundia ja Royal Roundia. Näistä molemmat ovat kelvollisia SCA-luokkien ammuntatuloksiin, jotka lähetetään kuningaskuntaan.</p>
          <h3>Kalpamiekkailu</h3>
          <ul>
            <li>Yhteystiedot: Dubhghall / dugi@iki.fi</li>
            <li>Huom! Harjoitukset ja kokeiluhetket sovittaessa</li>
          </ul>
          <p>Humalasalossa niin kuin muuallakin Aarnimetsässä miekkaillaan SCA:n miekkailusääntöjen mukaan. 
              Tervakannaksella kalpamiekkailun jaloon taitoon pääsee tutustumaan sovittaessa. Miekkailijat kalistelevat teriään 
              sekä sisävuoroilla että ulkona auringossa, ja sisävuorojen kustannukset jaetaan harjoituksiin osallistuvien kesken.</p>
      </div>
    </Layout>

)
export default Toiminta;