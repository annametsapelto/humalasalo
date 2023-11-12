import styles from "./Header.module.css";
import Image from "next/image";
import Navigaatio from './Navigaatio';

const Header = () => (
  <div className={styles.head}>
    <div className={styles.device}>
      <Image
        src="/images/humalasalodevice.png"
        alt="Humalasalon vaakuna"
        width={300}
        height={450}
      />
    </div>
    <div>
        <div className={styles.header}>
      <Image
        src="/images/humalasalonamebarplain.png"
        alt="Humalasalo, Hämeen keskiaikaseura ry"
        width={700}
        height={120}
      />
    </div>
    <div>
      <Navigaatio></Navigaatio>
    </div></div>

  </div>
);

export default Header;
