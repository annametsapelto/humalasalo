import styles from './Footer.module.css';
import FooterBox from './FooterBox';
import FooterPic from './FooterPic';

const Footer = () => (
    <div className={styles.footer}>
        <FooterPic />
        <FooterBox />
        <FooterBox />
    </div>
)

export default Footer;