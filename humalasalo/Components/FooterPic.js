import Image from 'next/image';
import styles from './Footer.module.css';

const FooterPic = () => (
    <div className={styles.footerBox}>
        <Image 
            src="/images/vaakuna2.png"
            alt="Punainen kultakuvioinen vaakuna kilvellä, miekat ristissä takana"
            height="150"
            width="120"
        />
    </div>
)
export default FooterPic;