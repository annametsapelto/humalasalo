import styles from './Footer.module.css';
import FooterBox from './FooterBox';
import FooterPic from './FooterPic';

const Footer = () => (
    <div className={styles.footer}>
        <FooterPic />
        <FooterBox 
            text="Humalasalon pitäjä"/>
        <FooterBox 
            text="Hämeen keskiaikaseura ry"/>
    </div>
)

export default Footer;