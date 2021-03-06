import Image from 'next/image';
import styles from './SmallPicture.module.css';

const SmallPicture = (props) => (
    <div className={styles.spic}>
    <Image
        src={props.picture}
        alt={props.name}
        width={300}
        height={100}
    />
    </div>
    )

export default SmallPicture;
