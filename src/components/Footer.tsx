import styles from '../styles/Footer.module.css';
import instagram from '../../public/instagram.svg';
import facebook from '../../public/facebook.svg';
import Image from 'next/image';

export default function Footer() {
    return(
        <footer id={styles.footer}>
            <p className={styles.footerHeader}>Nasze socjale</p>
            <div className={styles.iconContainer}>
                <a style={{all:'unset'}} href="https://www.instagram.com/traserniabarbershop/?fbclid=IwAR0j235-BIAeuBKkH7Nr0zKy57iBgmn8G6GqdqB1KtqOTF5dKmrGxJkkQ_k"><Image className={styles.icon} src={instagram} alt="Ikona instagrama" /></a>
                <a style={{all:'unset'}} href="https://www.facebook.com/Trasernia-Barbershop-Gda%C5%84sk-108151988616404"><Image className={styles.icon} src={facebook} alt="Ikona facebooka" /></a>
            </div>
            <p className={styles.credit}>Maciej Trząsalski</p>
        </footer>
    )
}