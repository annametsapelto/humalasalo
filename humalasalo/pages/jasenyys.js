import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
 
 const Jasenyys = () => (
    <Layout>
      <Head>
        <title>Humalasalo Jäsenyys</title>
      </Head>
      <div className={styles.main}>
        <h1>Jäsenyys</h1>
      </div>
    </Layout> 

)
export default Jasenyys;