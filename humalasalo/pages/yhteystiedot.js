import Layout from '../Components/Layout';
import styles from './MainContent.module.css';
import Head from 'next/head';

const Yhteystiedot = () => (
    <Layout>
      <Head>
        <title>Humalasalo Yhteystiedot</title>
      </Head>
      <div className={styles.main}>
        <h1>Yhteystiedot</h1>

      </div>
    </Layout>

)
export default Yhteystiedot;