import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';

const SCA = () => (
    <Layout>
      <Head>
        <title>Humalasalo SCA</title>
      </Head>
      <div className={styles.main}>
        <h1>Osana SCA:ta</h1>
      </div>
    </Layout>

)
export default SCA;