import Image from 'next/image';
import styles from './Kaavio.module.css';

const Kaavio = () => (
    <div className={styles.kaavio}>
    <Image
        src="/Images/sca-kaavio6.png"
        alt="Kaaviokuva SCA:n rakenteesta Humalasalon näkökulmasta"
        height={600}
        width={900}
    />
    </div>
)

export default Kaavio;