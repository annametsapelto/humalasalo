import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Humalasalo Etusivu</title>
      </Head>
      <div className={styles.main}>
        <h1>Tervetuloa keskiajalle</h1>
      </div>
    </Layout>

  )
}
