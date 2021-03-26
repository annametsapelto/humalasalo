import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
import LargePicture from '../Components/LargePicture';
import SmallPicture from '../Components/SmallPicture';

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Etusivu</title>
      </Head>
      <div className={styles.main}>
        <h1>Tervetuloa Humalasalon pitäjään!</h1>
        <SmallPicture
            picture = "/images/divider01.png"
            name = "Ritarijänis"
        />
        <p>Miekkailijat kilvoittelevat terät välkkyen auringossa, heraldiikan salat aukeavat teekupposen äärellä, 
          taitavat kädet tanssittavat ompeluneulaa ja luovat langoista kauneutta, tanssijat tempautuvat tanssien pyörteisiin, 
          pitopöydät notkuvat herkuista, ja jousiampujat virittelevät jousiaan hämmästyttääkseen taituruudellaan. 
          Unelma keskiajasta kokoaa kaikenikäiset historiasta kiinnostuneet yhteen Humalasalon vehreillä mailla. </p>
        <LargePicture
            picture = "/images/pääpöytä.jpg"
            name = "Joukko keskiaikaisesti pukeutuneita ihmisiä nostaa maljan."
        />
        <p>Humalasalon pitäjä eli Hämeen keskiaikaseura ry. on keskiajan ja renessanssin 
          elävöittämiselle omistettu yhdistys Pirkanmaan ja Hämeen alueella ja osa <a href="https://www.aarnimetsa.org/" target= "_blank"> Suomen keskiaikaseuraa</a>. 
          Tutkimme ja elävöitämme historiaa aina rautakaudesta renessanssiin. Monipuolinen toiminta antaa 
          jokaiselle mahdollisuuden sukeltaa “unelmaan keskiajasta” mieleisellään tavalla, oli se sitten mitä vain 
          kalpojenkalistelusta kalligrafian kiemuroihin tai hovitanssien pyörteistä aikakauden muotiin.</p>
        <SmallPicture
            picture = "/images/divider02.png"
            name = "Lohikäärme"
        />
        <p>Mukaan toimintaamme voi lähteä täysin ilman minkäänlaista ennakkotietämystä - kiinnostus historiaan 
          riittää! Humalasaloon voi tutustua osallistumalla erilaisten harrastuspiiriemme toimintaan ja syventää harrastusta 
          lähtemällä keskiaikaseuran tapahtumaan viettämään viikonloppua keskiaikaisissa tunnelmissa. 
          Tapahtumia on ympäri Suomen, ja SCA Society for Creative Anachronism, Inc. yhdistää meidät muihin samanhenkisiin 
          harrastajiin ympäri maailman. Toimintaamme voi osallistua myös ilman jäsenyyttä.</p>
        <p>Yhdessä tekeminen ja opetteleminen ovat humalasalolaisuuden ytimessä. Kaikki ovat tervetulleita 
          uppoutumaan keskiajan ihmisen elämän eri osa-alueisiin kanssamme, oppimaan uutta, tutustumaan uusiin ihmisiin ja ihastumaan keskiaikaan. 
          Lisää tietoa pitäjän ajankohtaisesta toiminnasta saa liittymällä <a href="http://humalasalo.net/mailman/listinfo/tiedotuslista_humalasalo.net"> sähköpostilistallemme</a> tai 
          <a href="https://www.facebook.com/groups/375781035887556" target ="_blank"> Facebook-ryhmäämme</a>. Tervetuloa mukaan!</p>
        <LargePicture
            picture = "/images/tulinuolia.jpg"
            name = "Rivi ihmisiä ampumassa tulinuolia."
        />
      </div>
    </Layout>

  )
}
