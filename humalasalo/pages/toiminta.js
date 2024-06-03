import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
import LargePicture from '../Components/LargePicture';
import SmallPicture from '../Components/SmallPicture';
import Link from 'next/link';

const Toiminta = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Toiminta</title>
      </Head>
      <div className={styles.main}>
        <h1>Toiminta</h1>
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
          <Link href="https://www.facebook.com/groups/375781035887556"> Humalasalon pitäjä -ryhmässä</Link>. </p>
        <SmallPicture
            picture = "/images/divider03.png"
            name = "Soturi ja etana"
        />
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
          <SmallPicture
            picture = "/images/divider01.png"
            name = "Ritarijänis"
          />
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
          <LargePicture
              picture = "/images/tanssia-pareissa.jpg"
              name = "Kaksi tanssivaa paria."
          />
          <h3>Jousiammunta</h3>
          <ul>
            <li>Aika: SISÄVUOROT TAUOLLA</li>
            <li>Paikka: etsinnässä</li>
            <li>Kuka: vapaat kaikille, myös aloittelijat tervetulleita</li>
            <li>Hinta: 2€/kerta/hlö, tutustumiskerta ilmainen</li>
            <li>Yhteystiedot:  jousimarski@humalasalo.net (Jousimarskit Jon Knutsson (Petteri Hoisko) ja Anneke Alfintytär Lindu (Anne Syrjä)</li>
            <li>Huom! Treeneistä (ja niiden peruuntumisista) tiedotetaan <Link href="https://www.facebook.com/groups/323373527762775/">Aarnimetsän jousikomppanian Facebook-ryhmässä</Link></li>
          </ul>
          <p>Humalasalon jousiammuntaharjoituksissa ammutaan pitkäjousilla ja vastakaarijousilla. 
            Reeneissä ammutaan sekä vapaamuotoisesti että pikku kisoja ja hieman skenaariomaisesti joitakin asioita harjoitellen. 
            Täysin aloittelijoita myös opastetaan tarpeen mukaan ja lainakamojakin löytyy. Perusammunnan ohella reenaillaan myös SCA:n paria 
            ammuntaa eli Portsmouth Roundia ja Royal Roundia. Näistä molemmat ovat kelvollisia SCA-luokkien ammuntatuloksiin, jotka lähetetään kuningaskuntaan.</p>
          <LargePicture
              picture = "/images/jousiammuntaa.jpg"
              name = "Jousiammuntaa ulkoilmassa."
          />
          <h3>Kalpamiekkailu</h3>
          <ul>
            <li>Yhteystiedot: Dubhghall / dugi@iki.fi</li>
            <li>Huom! Harjoitukset ja kokeiluhetket sovittaessa</li>
          </ul>
          <p>Humalasalossa niin kuin muuallakin Aarnimetsässä miekkaillaan SCA:n miekkailusääntöjen mukaan. 
              Tervakannaksella kalpamiekkailun jaloon taitoon pääsee tutustumaan sovittaessa. Miekkailijat kalistelevat teriään 
              sekä sisävuoroilla että ulkona auringossa, ja sisävuorojen kustannukset jaetaan harjoituksiin osallistuvien kesken.</p>
          <h3>SCA Heavy Combat eli rottinkitaistelu</h3>
          <ul>
            <li>Yhteystiedot: marski, <Link href="http://scafightingfinland.com/forums/" target="_blank"> foorumi</Link></li>
          </ul>
          <p>Rottinkitaistelun esikuvana on keskiaikainen miekkailu ja turnajaiset, ja se on saanut nimensä pääasiassa rottingista  
            valmistetuista aseistaan. Rottinkia käytetään aseissa sen turvallisuutta
             lisäävien ominaisuuksien vuoksi. Rottinkitaistelua käydään jalkaisin, 
             monin erilaisin asein, metalli- tai nahkahaarniskoilla suojautuneina. 
             Koska taistelut käydään täydellä vauhdilla iskuja säästelemättä, on haarniska 
             välttämätön. Lisäksi taistelijoiden turvaksi on laadittu tiukka säännöstö, 
             joka asettaa omat turvallisuusvaatimuksensa jo haarniskoillekin. 
             Toisin kuin keskiajalla oikeasti, myös naiset voivat halutessaan osallistua meidän 
             taistelutoimintaamme ihan siinä missä miehetkin - ja monet osallistuvatkin.</p>
          <p>Lisätietoja saat <Link href="http://scafightingfinland.com/" target="_blank"> infosivuilta</Link>.</p>
          <LargePicture
              picture = "/images/rottinkitaistelua.JPG"
              name = "Kaksi rottinkitaistelijaa turnajaiskentällä."
          />
          <h3>Historian tutkiminen</h3>
          <p>Keskiajan ja renessanssin historiaa voidaan harrastaa myös yleisellä tasolla tutkimalla esimerkiksi 
            aikakauden luonnontieteitä, kielitieteitä, aatehistoriaa, kulttuuri- ja sosiaalihistoriaa sekä kirjallisuutta. 
            Tapahtumissa voit kuulla tai pitää esitelmiä hyvin monista aiheista.</p>  
          <h3>Illuminatio ja kalligrafia</h3>
          <p>Illuminaatiolla tarkoitetaan keskiaikaisiin käsikirjoituksiin tehtyjä maalauksia. 
            Se kattaa kaiken koristelun reunamaalauksista koko sivun peittäviin kuviin. Kalligrafiaan eli 
            tekstauksen taitoon tutustumalla opit kirjoittamaan vanhoja tekstityylejä.</p>
          <p>Keskiaikaseurassa illuminaatiota ja kalligrafiaa voi harrastaa ihan omaksi iloksi, mutta ns. 
            kirjakääröjä eli scrolleja käytetään myös erilaisten saavutusten huomionosoituksina, joista yleisin esimerkki on aateliskirjan saaminen.</p>
          <LargePicture
              picture = "/images/kalligrafiaa.jpg"
              name = "Illuminaatiolla koristeltu aateliskirja, joka on tehty muistuttamaan vanhaa nuotinnosta."
          />
          <h3>Käsityöt</h3>
          <p>Käsityöt ovat hyvin tärkeä osa menneisyyden elävöittämistä. Käsityötapaamisissa kartutamme tietojamme 
            ja taitojamme vanhoista materiaaleista ja menetelmistä. Mitään ei tarvitse tietää etukäteen, 
            kokeneemmat harrastajat neuvovat mielellään.</p>
          <p>Voit aloittaa pienistä töistä ja taidon kertyessä voit valmistaa itsellesi kokonaisen keskiaikapuvun tai puvuston lisävarusteineen. 
            Työstämme kankaan lisäksi myös nahkaa, metallia, puuta ja keramiikkaa. Voit siis valmistaa itsellesi puvun lisäksi puukon, korut, 
            kengät ja astiat. Neuvoja löytyy myös haastavampiin töihin. Jos siis suunnitelmissasi on saada oma haarniska, niin senkin toteuttaminen on mahdollista. 
            Linkkilistan kautta löydät yksityiskohtaisempaa tietoa eri aihealueista.</p>
          <p>Käsityötapaamisista saat helpoiten tietoa liittymällä seuran postituslistalle.</p>
          <h3>Musiikki</h3>
          <p>Elävä musiikki on tärkeä tunnelmanluoja. Tapahtumissamme lauletaan ja musisoidaan usein yhdessä. 
            Pääpaino on keskiaika- ja renessanssimusiikissa sekä niiden säännöin kirjoitetussa uudessa musiikissa. 
            Tutustumme myös vanhoihin ja ajanmukaisiin soittimiin. Musiikkipiireihin ovat kaikki taitotasosta riippumatta tervetulleita. 
            Musikanteilla on myös mahdollisuus esiintyä esimerkiksi pidoissa tai vaikkapa säestää tanssia. Lisätietoja saat 
            tapahtumakalenterista ja seuran kastellaanilta tai tiede- ja taideneuvokselta.</p>
          <h3>Ruoanlaitto</h3>
          <p>Keskiaikatapahtumat huipentuvat yleensä pitoihin, joissa voidaan tarjoilla suurelle joukolle kattauksittain 
            jopa kymmeniä ruokalajeja. Ruoanlaittoa voi harrastaa pienimuotoisemmin harrastuspiireissä ja omassa keittiössä. 
            Teemme ruokaa erilaisten historiallisten lähteiden ja harrastusperiodimme ajalta säilyneiden reseptien sekä niiden modernisoitujen muunnosten mukaan.</p>
          <SmallPicture
            picture = "/images/divider02.png"
            name = "Lohikäärme"
          />
          <h3>Heraldiikka</h3>
          <p>Heraldiikka sisältää seurassamme vaakunat, protokollan ja nimistöasiat ja nämä asiat muodostavat airueidemme toimialan.</p>
          <p>1100-luvulla käyttöön tulleet vaakunat olivat vahvasti läsnä keskiajan elämässä ja niinpä niitä käytetään 
            merkittävissä määrin myös seuran toiminnassa. Kuka tahansa seuran jäsen voi omaksua itselleen vaakunan tai muun heraldisen merkin, 
            joka rekisteröidään seuran piirissä kansainvälisesti siten, että vaakunan omistajalla on yksinoikeus mainittuun tunnukseen seuran 
            toiminnassa. Vaakunoita käytetään lippuina, kilpiin maalattuina, vaatteissa koristeena sekä mitä moninaisimmin muin tavoin.</p>
          <h3>Keskiaikapersoona</h3>
          <p>Tapahtumissa, ja seuran piirissä muutenkin, ihmiset tunnetaan usein keskiaikanimellä eikä omalla nimellään. 
            Nimen tulee olla sellainen, jota oikeasti keskiajalla elänyt henkilö olisi voinut käyttää. Nimi muodostuu etunimestä ja 
            mahdollisesta suku- tai lisänimestä, joka tulee esim. paikan, ammatin, vanhempien tai jonkin henkilöön liitetyn ominaisuuden mukaan. 
            Kasaa kuitenkin nimesi itse ja jätä keksityt ja tunnetut nimet pois. Et siis voi olla Kaarle Suuri, Vilhelm Valloittaja tai Robin Hood. 
            Aatelisarvoa ei nimeesi voi lisätä ennen kuin sinulle on sellainen seurassa myönnetty. Voit kehittää persoonasi 
            ympärille halutessasi tarkan henkilöhistorian. Apua tässä aiheessa saat airuelta.</p>
      </div>
    </Layout>

)
export default Toiminta;
