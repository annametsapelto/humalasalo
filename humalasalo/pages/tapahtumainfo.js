import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
import LargePicture from '../Components/LargePicture';
import Link from 'next/link';
 
 const Tapahtumainfo = () => (
    <Layout>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Tapahtumainfo</title>
      </Head>
      <div className={styles.main}>
        <h1>Käytännön tietoa keskiaikaseuran tapahtumista</h1>
        <p>Mukailtu Aarnimetsän uusien jäsenten oppaasta. Koko oppaan voi käydä lukemassa 
            <Link href="https://www.aarnimetsa.org/wp-content/uploads/2019/12/uuden_j%c3%a4senen_opas-2015-teksti.pdf" target="_blank"> täältä</Link>.</p>
        <p>Keskiaikaseurassa järjestetään useanlaisia tapahtumia. Tavallisin tapahtumatyyppi Suomessa/Skandinaviassa on viikonlopun kestävä juhla. 
            Perjantai¬illan ohjelmaan saattaa kuulua iltapala, ja varmasti siihen kuuluu yleistä hauskanpitoa, jutustelua ja toisinaan tanssia. 
            Lauantai on varsinainen tapahtumapäivä, johon keskeinen ohjelma sijoittuu. Jos tapahtumaan liittyy turnajaisia, ne pidetään yleensä 
            lauantaina päivällä. Illalla ohjelmassa on juhlaillallinen. Myös hovi ajoittuu yleensä lauantai¬iltaan. Tanssi¬intoiset varsin tyypillisesti 
            jatkavat hilpeää menoaan yömyöhään. Sunnuntaina ei erityisemmin ole ohjelmaa vaan valmistellaan lähtöä ja siivotaan paikat. 
            Lisäksi kylät ja pitäjät järjestävät toisinaan pienempimuotoisia, esim. yhden illan kestäviä, tapahtumia. Kesäisin on useamman 
            päivän kestävä telttaleiri. Kaikista näistä poikkeavat ns. demot eli satunnaiset tilaisuudet, joissa keskiaikaseura esittelee toimintaansa yleisölle.</p>
        <p>Keskiaikaseuran tapahtumista ilmoitetaan Aarnimetsän lehdessä Aarniwalceassa sekä Aarnimetsän sähköpostilistalla ja Facebook¬ryhmässä. 
            Aarnimetsän, kuin myös muun Drachenwaldin, suuremmista tapahtumista ilmoitetaan kuningaskunnan lehdessä Dragon`s Talessa. 
            Tapahtumiin tulee aina ilmoittautua etukäteen, ja hyvissä ajoin, sillä usein tapahtumiin on enemmän tulijoita kuin juhlapaikalla
             on tilaa majoittaa. Tapahtumat tulee yleensä myös maksaa etukäteen. Tapahtumiin voi ilmoittautua yleensä sähköpostitse. 
             Autokraatin eli tapahtuman pääjärjestäjän yhteystiedot ilmenevät tapahtumailmoituksesta. Ilmoittautuessasi kerro sekä oikea että keskiaikainen nimesi,
              omat yhteystietosi sekä mahdollisesta erityisruokavaliostasi. Osallistumismaksu koostuu kaikille pakollisesta varsinaisesta 
              tapahtuma-maksusta sekä ateriamaksuista. Mikäli maksat vain osasta aterioista tai et mistään niistä, mainitse asiasta ilmoittautuessasi autokraatille 
              ja maksaessasi liitä maksun viestiosuuteen mistä maksat. Ilmoittautumisajan umpeutumisen jälkeen ilmoittautuvilta on tapana periä pieni myöhästymismaksu, 
              ja mattimyöhäiset voivat lisäksi jäädä ilman juhla-¬ateriaa. Etukäteisilmoittautuminen on tarpeellista, jotta tapahtumanjärjestäjät voivat tietää, 
              kuinka paljon tarvitaan ruokaa ym. Lisäksi tapahtumapaikan koko luonnollisesti asettaa rajoja osallistujamäärälle, joten yllätysvieraana paikalle 
              tupsahtaminen ei olisi kovin kohteliasta, vaikka jättäisi osallistumatta varsinaisiin aterioihin ja söisi omia eväitään. </p>
        <p>Suomessa tapahtumissa pyritään tarjoamaan aina kasvisruokaa ja vähälaktoosista vaihtoehtoa. Jos sinulla on kuitenkin muita 
            allergioita tai tarkempia erikoisruokavalioita, suosittelen keskustelemaan tapahtuman järjestäjän ja ruokavastaavan kanssa saadaanko sinulle sopivaa ruokaa tarjoiltua. 
            Kyseessä on harrastustoiminta, jossa vapaaehtoiset tekevät viikonlopun ajan ruokaa, joten heillä ei välttämättä ole valmiuksia tehdä kaikkia ruokia kaikille. 
            Tähän vaikuttaa myös keittiön koko ja tapahtuman budjetti. Lisäksi jos ja kun sinulle saadaan sovittua tarjottavan ruoka, kannattaa käydä tapahtumapaikalle 
            päästyäsi juttelemassa pääkokin kanssa, että hän tietää sinut ulkonäöltä ja voitte vielä yhdessä käydä läpi, mitkä ruuat ovat sinulle tarkoitettuja. </p>
        <p>Vaikka leirikeskuksessa ei voi olla yhtä mukavaa kuin kotona, varustautuminen auttaa kummasti. Jos ei halua elävöittää keskiaikaa kärsien päänsärystä, 
            nuhjuisuudesta ja nälästä, näistä pakkausohjeista voi olla hyötyä. Pakatessa on hyötyä pakkauslistan tekemisestä, sillä useimmiten tapahtumiin tarvitsee 
            mukaansa samat tavarat. Listasta voi pakatessaan ruksia pois jo pakatut asiat ja varmistaa kaiken tulleen mukaan. Listaamalla välttyy siltä, että huomaa 
            vasta tapahtumapaikalla unohtaneensa jotain tärkeää. </p>
        <p>Keskiaikavaatteet täyttävät suurimman osan laukusta. On turhaa pakata mukaan kovin montaa vaatekertaa, sillä juhliessa ei koko ajan ehdi juosta vaatteita vaihtamassa. 
            Useimmat ottavat mukaan kaksi asua, arkivaatteet sekä jotain hienompaa pitoja varten. Hyvä tapa säästää tilaa on pakata mukaan vain yksi vaatekerta ja erilaisia asusteita. 
            Päähinettä, päällysmekon osaa, solkia, vyötä tai muuta asustetta vaihtamalla asustaan saa juhlavamman helposti ja nopeasti. Vaatevalintoja suunnitellessa kannattaa muistaa, 
            että tapahtumissa on usein ulko-¬ohjelmaa ja sisälläkin voi olla vetoisaa. Lämmin vaate saattaa tulla tarpeeseen lämpiminäkin vuodenaikoina. 
            Talvella lämpimien vaatteiden lisäksi on hyvä ottaa mukaan hyvät kengät. Kesäkuumaan voi varustautua päähineellä ja aurinkovoiteella. </p>
        <p>Omien astioiden mukana kuljettaminen on yksi keskiaikaharrastuksen erikoisuus. Tarvitset ainakin oman juoma¬-astian, veitsen, lusikan sekä syvän lautasen. 
            Useat kantavat näitä koreissa. Pöytäliinalla saa pöydän peittoon ja lautasliinaan on mukavaa pyyhkiä suutaan. Liinoihin on kätevää pakata särkyvät astiat. 
            Juomat on sopivaa kaataa pulloista ruukkuun tai kannuun. Pullojen avaamiseen on hyvä muistaa ottaa avaaja. Jos innostuu kattauksesta enemmän, voi tuoda vesikannun, 
            käsienpesuastian, suola-¬astian ja lukuisampia pöytäliinoja. Kannattaa sopia kavereiden kanssa siitä, kuka tuo mitäkin. Näin jokaisen pöytäseurueen 
            jäsenen ei tarvitse kuljettaa ja hankkia omaa pöytäliinaa tai kannua. </p>
        <p>Vaikka keskiaikajuhlissa pöydät ovat koreana, kannattaa ottaa mukaan joitakin omia eväitä. Ruokaa tarjoillaan usein tavallisesta poikkeaviin aikoihin, 
            joten nälkä voi päästä yllättämään. Myöhästyminen aamiaiselta tai iltapalalta ei harmita, jos mukana on evästä. Mukavia ja ajanmukaisia eväitä ovat mm. 
            juustot, makkarat, leivät, pähkinät ja kuivatut hedelmät. Pimeässä on ikävää istuskella, joten muista ottaa mukaan kynttilänjalka, tulitikut ja kynttilöitä. 
            Kynttilä on ajanmukaisista valaistuskeinoista paloturvallisin ja siksi suositumpi kuin esimerkiksi öljylamput tai päreet. Kynttilöitä kannattaa pakata reilusti, 
            siltä varalta että ne katkeilevat tai katoavat. Osassa tapahtumapaikkoja ei saa olla elävää tulta, joten kompromissina käytetään sähkökynttilöitä lyhdyn sisällä. 
            Tapahtumat eivät tarjoa alkoholillisia juomia, joten jos mielesi tekee nauttia sellaisia, pitää ne ostaa itse etukäteen.</p>
        <p>Kannattaa varautua kaikkeen: tapahtumaan on tärkeää pakata ne kaikki lääkkeet, joita saattaa tarvita. Lähin apteekki on usein kaukana, 
            eikä tapahtumajärjestäjillä ole yleensä lääkkeitä tarjolla kuin todella akuutteihin vaivoihin. Jos jokin vaiva tapaa yllättää silloin tällöin, 
            tapahtumassa se tulee varmasti. Esimerkiksi allergia¬ tai päänsärkylääkkeelle on usein tarvetta. Naisten kannattaa varautua kuukautisiin. 
            Omat arkitarpeensa kannattaa muistaa myös tapahtumissa. Esimerkiksi kovan kofeinistin on hyvä varustautua pikakahvilla, ettei kahvinhimo äidy sietämättömäksi. 
            Oma shampoo, hammasharja ja pyyhe parantavat elämänlaatua kummasti, eikä tarvitse pummia tuotteita muilta. Joissakin tapahtumapaikoissa pesumahdollisuudet ovat 
            rajalliset tai olemattomat. Silloin kannattaa pakata mukaan kasvo-¬ ja kosteuspyyhkeitä sekä käsidesiä. Pellavapyyhe on paitsi historiallinen, myös pyyhkeenä loistava. 
            Se menee pieneen tilaan ja kuivaa hyvin.</p>
        <p>Nukkumistarpeiksi voi ottaa lakanat ja peiton tai makuupussin. Moni tapahtumapaikka vaatii osallistujilta makuupussinkin lisäksi tyynyliinan ja lakanat. 
            Liinavaatteissa on mukava nukkua: päätä ei tarvitse painaa suoraan kymmenien partiolaissukupolvien nuhjaamaan tyynyyn. 
            Kaiken edellä mainitun lisäksi tapahtumiin pitää muistaa tuoda omat harrastusvälineensä: haarniskat, jouset, soittimet, käsityötarvikkeet tai muut. 
            Jos odotettavissa on luentoja, muistiinpanovälineitä ei kannata unohtaa. </p>
        <p>Ohjeekseen keskiaikaseuran tapahtumiin voi ottaa ritarillisen käytöksen sukupuolesta riippumatta. Ystävällinen, kohtelias ja avoin käyttäytyminen on toivottavaa tapahtumissa. 
            Ritarillisuuteen kuuluvat kohteliaisuudet, niiaukset ja kumarrukset, ylempiarvoisten huomiointi. On muistettava, että kaikkien keskiaikaseuralaisten oletetaan 
            kuuluvan vähintään alhaisaateliin, joten aatelisille sopiva käytös on paikallaan puolin ja toisin. Puheenaiheisiinkin kannattaa kiinnittää huomiota, 
            jotta tunnelma ei särkyisi. On hyvä välttää liian nykyaikaisia aiheita, kuten vaikkapa ajankohtaista politiikkaa tai tietokonejuttuja. 
            Nykyaikaiset esineet voi nimetä kiertoilmauksin, esimerkiksi puhelinta voi sanoa huutotorveksi tai kirjekyyhkyksi. Tapahtumissa on tapana peittää kaikki nykyaikaiset esineet. 
            Toivottavaa on, että tällaiset esineet voitaisiin korvata keskiaikaisilla, mutta jos se ei ole mahdollista, peitä nuo esineet pois näkyviltä. 
            Esimerkiksi kello on syytä irrottaa ranteesta. Nykyaikaiset juomapullot, kosmetiikka yms. on syytä piilottaa vaikkapa pussukoihin. Tunnelma särkyy helposti, 
            jos juhla¬paikalla on näkyvissä nykyaikaisia esineitä. Tämä sääntö on tärkeä ja se koskee kaikkia keskiaikaseuralaisia riippumatta heidän asemastaan. 
            Silmälasit ja muut välttämättömyydet kuitenkin sallitaan. Tupakointi tapahtumissa on sallittua vain sille osoitetuilla paikoilla. 
            Savuke ei sovi keskiaikaisesti pukeutuneelle henkilölle, joten tupakointi ei ole suotavaa tapahtuman keskeisillä alueilla. Myös valokuvaamista on syytä välttää. 
            Jos välttämättä haluat kuvata, katso, että se ei häiritse ketään. Varsinkin salamavalon kanssa kuvaaminen voi olla häiritsevää. 
            Etenkin juhlaillallisella tai hovissa se on sopimatonta ilman lupaa. Tapahtumissa on syytä muistaa teräaseiden turvallinen käsittely. 
            Jos kannat ruokailupuukkoa vyölläsi, katso, että se on tupessa. Jos kannat mukanasi miekkaa, on järkevää pitää sitä huotrassa. Teräaseilla ei saa huitoa, 
            ja jos esittelet miekkaasi toisille, on sanottava "Clear" kuuluvalla äänellä ennen miekan esiin vetämistä, jotta vahinkoja ei sattuisi. </p>
        <LargePicture 
            picture="/images/ruoka2.jpg"
            name="Ruokaa, ruoka-astioita ja juoma-astioita nurmikolla."
        />
        <h3><Link href="/tapahtumat">Takaisin tapahtumat-sivulle</Link></h3>
      </div>
    </Layout> 

)
export default Tapahtumainfo;