import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';

const Seuralaisille = () => (
    <Layout>
      <Head>
        <title>Humalasalo Seuralaisille</title>
      </Head>
      <div className={styles.main}>
        <h1>Seuralaisille</h1>
      </div>
    </Layout>

)
export default Seuralaisille;