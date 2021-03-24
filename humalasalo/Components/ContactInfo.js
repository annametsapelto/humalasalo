import styles from './ContactInfo.module.css';
import Badge from '../Components/Badge';

const ContactInfo = (props) => (
    
<div className={styles.infobox}>
    <h3>{props.title}</h3>
    <div className = {styles.rest}>
        <div className = {styles.badge}>
            <Badge
            pic = {props.pic}
            alt = {props.picName}
            height = {20}
            width = {20}
        /></div>
        <div className = {styles.info}>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
        </div>
    </div>
)


export default ContactInfo;