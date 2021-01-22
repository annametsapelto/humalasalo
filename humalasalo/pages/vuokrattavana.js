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
      </div>
    </Layout>

)
export default Vuokrattavana;