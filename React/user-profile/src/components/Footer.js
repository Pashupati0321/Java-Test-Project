import styles from './Footer.module.css';

function Footer() {  
 return (
    <div className={styles.footer}>
    <a href = "https://github.com/" target='_blank'>Github</a>
    <a href = "https://linkedln.com/" target='_blank'>Linkedln</a>
    <a href = "https://twitter.com/" target='_blank'>Twitter</a>
    </div>
  );
}

export default Footer;