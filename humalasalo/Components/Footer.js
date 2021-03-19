import styles from './Footer.module.css';
import Link from 'next/link';
import FooterPic from './FooterPic';

const Footer = () => (
    <div className={styles.footer}>
        <FooterPic />
        <p>Humalasalon pitäjä</p>
        <p>Hämeen keskiaikaseura ry</p>
        <p><Link href="/yhteystiedot"><a>Yhteystiedot</a></Link></p>
        <p><a href="https://www.facebook.com/groups/375781035887556" target="_blank">Facebook</a></p>
    </div>
)

export default Footer;