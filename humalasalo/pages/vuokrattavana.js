import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';

const Vuokrattavana = () => (
    <Layout>
      <Head>
        <title>Humalasalo Vuokrattavana</title>
      </Head>
      <div className={styles.main}>
        <h1>Vuokrattavana</h1>
        <p>Hämeen keskiaikaseuralla on omaisuutta, jota se voi vuokrata joko toisille keskiaikaseuroille, yrityksille tai yksityishenkilöille.
          Jos tahdotte vuokrata jotain meiltä, ottakaa yhteys ensisijaisesti voutiin sähköpostitse osoitteeseen vouti@humalasalo.net.
        </p>
        <h3>Astiasto</h3>
        <p>Puuatulat 10 kpl, hendi 22,5 cm 5 kpl, hendi 26 cm 3 kpl, hendi 24 cm 6 kpl, isokorvainen hendi 12 kpl, pienikorvallinen hendi 12 kpl, 
          pystyreunainen, suuri hendi 3 kpl, pystyreunainen hendi 16 cm 25 kpl, kulho 12 cm 24 kpl, kulho 20 cm 20kpl, iso metallikauha 1 kpl, 
          iso metallilasta 1kpl, juuresveitsi 4 kpl, juustohöylä 3 kpl, kaavin 2 kpl, kauha 2 kpl, keittokattila 20 l 4 kpl, kierrevispilä 2 kpl, 
          koverrettu puuastia 2 kpl, kuorimaveitsi 3 kpl, leikkuulauta 4 kpl, mittakannut 3 kpl, muovikauha 7 kpl, muovilasta 2 kpl, suppilo 1 kpl, 
          keskisyvä kulho 20 cm 6 kpl, keskisyvä kulho 16 cm 1 kpl, keskisyvä kulho 17 cm 4 kpl, keskisyvä kulho 19,5 cm 4 kpl, keskisyvä kulho 22 cm 4 kpl, 
          keskisyvä kulho 24,5 cm 4 kpl, pystyreunainen kulho 21,5 cm 1 kpl, kulho 21,5 cm 6 kpl, kulho 24,5 cm 3 kpl, iso paistinpannu 4 kpl, 
          paistomittari 1 kpl, pallovispilä 2 kpl, pannunalunen 4 kpl, metallipihdit 1 kpl, pullasuti 2 kpl, raastin 1 kpl, iso reikäkauha 1 kpl, 
          ruotopihdit 2 kpl, leipäveitsi 1 kpl, sahalaitainen yleisveitsi 1 kpl, sakset 2 kpl, savinen voiastia 12 kpl, yleisveitsi 2 kpl, 
          kokkiveitsi 2 kpl, iso metallinen tarjoilukauha 12 kpl, pyöreä tarjoilukauha 12 kpl, tarjoilulusikka 6 kpl, reikäpesäinen tarjoilulusikka 6 kpl, 
          tarjoiluvati 40 cm 4 kpl, tarjoiluvati 49 cm 4 kpl, leveä tarjoiluvati 49 cm 5 kpl, termoskannu 3 kpl, tölkinavaaja 1 kpl, tongit 2 kpl, 
          korkea kannellinen uunipakki 2 kpl, valkosipulinpuristin 1 kpl</p>
      <h3>Katos</h3>
      <p>Katos</p>
      <h3>Teltta</h3>
      <p>Teltta</p>
      <p>Hämeen keskiaikaseuralla ei ole pukuvarastoa, jota se voi vuokrata. On kuitenkin mahdollista tiedustella yksittäisten harrastajien pukuja vuokralle.</p>
      </div>
      
    </Layout>

)
export default Vuokrattavana;