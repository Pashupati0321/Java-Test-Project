import styles from './Contact.module.css';

function Contact() { 
 return (
    <div className={styles.contact}>
    <h2>Contact</h2>
    <p>Email: your.email@example.com</p>
    <p>Phone: 1234567890</p>
    </div>
  );
}

export default Contact;