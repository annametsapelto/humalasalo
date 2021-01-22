import Layout from '../Components/Layout'; 
import Head from 'next/head';
import styles from './MainContent.module.css';
 
 const Keikalle = () => (
    <Layout>
      <Head>
        <title>Humalasalo Keikalle</title>
      </Head>
      <div className={styles.main}>
        <h1>Keikalle</h1>
      </div>
    </Layout>

)
export default Keikalle;