import Image from 'next/image';
import styles from './SmallPicture.module.css';

const SmallPicture = (props) => (
    <div className = {styles.smallPic}>
    <Image
        src={props.picture}
        alt={props.name}
        width={300}
        height={150}
    />
    </div>
    )

export default SmallPicture;
