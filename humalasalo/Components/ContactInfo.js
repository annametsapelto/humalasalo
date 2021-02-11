import styles from './ContactInfo.module.css';

const ContactInfo = (props) => (
    <div className={styles.infobox}>
        <h3>{props.title}</h3>
        <p>{props.name}</p>
        <p>{props.email}</p>
    </div>
)

export default ContactInfo;