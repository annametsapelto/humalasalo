import Layout from '../Components/Layout';
import LargePicture from '../Components/LargePicture';
import SmallPicture from '../Components/SmallPicture';
import Head from 'next/head';
import styles from './MainContent.module.css';

const Seuralaisille = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Seuralaisille</title>
      </Head>
      <div className={styles.main}>
        <h1>Seuralaisille</h1>
        <SmallPicture
            picture = "/images/lilja.png"
            name = "Lilja"
        />
        <p>Humalasalon väellä on käytettävissään seuran oma kirjasto, 
          joka sijaitsee Märtan ja Lukasin residenssissä. 
          Kirjat ovat lainattavissa kaikille Humalasalon vakiintuneille 
          asukkaille eli maksaville jäsenille sekä pidempään mukana olleille ei-maksaneille. </p>
        <LargePicture
            picture = "/images/käsityöt3.jpg"
            name = "Nyörihaarukka ja lankaa."
        />
      </div>
    </Layout>

)
export default Seuralaisille;