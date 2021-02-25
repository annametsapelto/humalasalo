import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => (
    <div className={styles.header}>
        <Image className={styles.picture} 
            src="/images/vaakuna2.png"
            alt="Punainen kultakuvioinen vaakuna kilvellä, miekat ristissä takana"
            height="150"
            width="120"
        />
        <h1>Humalasalon pitäjä</h1>
        <h2>-Hämeen keskiaikaseura ry</h2>
    </div>
)

export default Header;