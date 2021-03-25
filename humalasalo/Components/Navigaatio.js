import Link from 'next/link';
import styles from './Navigaatio.module.css';

const Navigaatio = () => (
    <div className={styles.nav}>
        <ul>
            <li><Link href="/"><a>Etusivu</a></Link></li>
            <li><Link href="/toiminta"><a>Toiminta</a></Link></li>
            <li><Link href="/tapahtumat"><a>Tapahtumat</a></Link></li>
            <li><Link href="/SCA"><a>SCA</a></Link></li>
            <li><Link href="/jasenyys"><a>Jäsenyys</a></Link></li>
            <li><Link href="/seuralaisille"><a>Seuralaisille</a></Link></li>
            <li><Link href="/keikalle"><a>Keikalle</a></Link></li>
            <li><Link href="/yhteystiedot"><a>Yhteystiedot</a></Link></li>
        </ul>
    </div>
)

export default Navigaatio;