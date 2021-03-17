import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
import LargePicture from '../Components/LargePicture';

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Etusivu</title>
      </Head>
      <div className={styles.main}>
        <h1>Tervetuloa keskiajalle</h1>
        <LargePicture
            picture = "/images/fighting_by_a_lake.jpg"
            name = "Fighting by a Lake at Cudgel War"
        />
      </div>
    </Layout>

  )
}
