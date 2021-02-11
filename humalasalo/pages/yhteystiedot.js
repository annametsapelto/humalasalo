import Layout from '../Components/Layout';
import styles from './MainContent.module.css';
import Head from 'next/head';
import ContactInfo from '../Components/ContactInfo';

const Yhteystiedot = () => (
    <Layout>
      <Head>
        <title>Humalasalo Yhteystiedot</title>
      </Head>
      <div className={styles.main}>
        <h1>Yhteystiedot</h1>
            <ContactInfo 
            title="Vouti (Puheenjohtaja)"
            name="Erhart von Mannheim (Jarno Manninen)"
            email="Email: vouti@humalasalo.net"
            />
      </div>
    </Layout>

)
export default Yhteystiedot;