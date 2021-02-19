import styles from './Footer.module.css';

const FooterBox = (props) => (
    <div className={styles.footerBox}>
        <p>{props.text}</p>
    </div>
)

export default FooterBox;