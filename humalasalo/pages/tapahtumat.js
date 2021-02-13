import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';

const Tapahtumat = () => (
    <Layout>
      <Head>
        <title>Humalasalo Tapahtumat</title>
      </Head>
      <div className={styles.main}>
        <h1>Tapahtumat</h1>
      </div>
    </Layout>
)

export default Tapahtumat;