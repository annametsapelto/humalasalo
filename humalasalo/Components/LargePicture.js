import Image from 'next/image';
import styles from './LargePicture.module.css'

const LargePicture = (props) => (
    <div className={styles.pic}>
        <Image
            src={props.picture}
            alt={props.name}
            width={700}
            height={450}
        />
    </div>
    )

export default LargePicture;