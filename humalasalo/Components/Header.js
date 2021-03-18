import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => (
    <div className = {styles.head}>
    <div className = {styles.device}>
        <Image
            src="/Images/humalasalodevice.png"
            alt="Humalasalon vaakuna"
            width={300}
            height={450}
        />
    </div>
        <div className={styles.header}>
            <h1>Humalasalon pitäjä</h1>
            <h2>-Hämeen keskiaikaseura ry</h2>
        </div>
    </div>
)

export default Header;