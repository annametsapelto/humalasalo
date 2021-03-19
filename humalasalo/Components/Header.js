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
        <Image
            src="/Images/humalasalonamebar.png"
            alt="Humalasalo, Hämeen keskiaikaseura ry"
            width={800}
            height={150}
        />
        </div>
    </div>
)

export default Header;