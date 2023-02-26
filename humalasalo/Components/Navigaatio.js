import Link from 'next/link';
import styles from './Navigaatio.module.css';

const Navigaatio = () => (
    <div className={styles.nav}>
        <ul>
            <li><Link href="/">Etusivu</Link></li>
            <li><Link href="/toiminta">Toiminta</Link></li>
            <li><Link href="/tapahtumat">Tapahtumat</Link></li>
            <li><Link href="/SCA">SCA</Link></li>
            <li><Link href="/jasenyys">Jäsenyys</Link></li>
            <li><Link href="/seuralaisille">Seuralaisille</Link></li>
            <li><Link href="/keikalle">Keikalle</Link></li>
            <li><Link href="/yhteystiedot">Yhteystiedot</Link></li>
        </ul>
    </div>
)

export default Navigaatio;