import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footer_nav}>
                <Link to={'/'}><Button name='O nas'/></Link>
                <Link to={'/service'}><Button name='Serwis'/></Link>
                <Link to={'/contact'}><Button name='Kontakt'/></Link>
            </nav>

            <nav className={styles.footer_social}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </nav>

            <p className={styles.footer_copy}>© All rights reserved.</p>
        </footer>
    )
}
