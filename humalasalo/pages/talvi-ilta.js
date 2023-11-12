import Layout from '../Components/Layout';
import Head from 'next/head';
import styles from './MainContent.module.css';
import LargePicture from '../Components/LargePicture';
import SmallPicture from '../Components/SmallPicture';
import Link from 'next/link';

const TalviIlta = () => (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Humalasalo Talvi-ilta</title>
      </Head>
      <div className={styles.main}></div>
    </Layout>
)

export default TalviIlta;