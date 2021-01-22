import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';

const Toiminta = () => (
    <Layout>
      <Head>
        <title>Humalasalo Toiminta</title>
      </Head>
      <div className={styles.main}>
        <h1>Toiminta</h1>
      </div>
    </Layout>

)
export default Toiminta;