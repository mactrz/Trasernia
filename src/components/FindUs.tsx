import Image from 'next/image';
import styles from '../styles/FindUs.module.css';
import arrow from '../../public/smallArrow.svg';

export default function FindUs() {
    return(
        <>
            <h1 className={styles.findUsHeader}>Chcesz umówić wizytę?</h1>
            <div className={styles.findUsContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.captionContainer} id={styles.callCaption}>
                        <p className={styles.caption}>Zadzwoń do nas</p>
                        <Image className={styles.arrow} src={arrow} alt="Strzałka"/>
                    </div>
                    <p className={styles.phoneNumber}>+48 312 312 312</p>
                    <div className={styles.captionContainer} id={styles.onlineCaption}>
                        <p className={styles.caption}>Umów wizytę online</p>
                        <Image className={styles.arrow} src={arrow} alt="Strzałka"/>
                    </div>
                    <a style={{all:'unset'}} href="https://booksy.com/pl-pl/149217_trasernia-barbershop-gdansk_barber-shop_20383_gdansk?do=invite&_branch_match_id=1142464896509675541&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVDy5KzDMpLc0oKkoCALfGX2giAAAA"><button className={styles.button}>Umów wizytę</button></a>
                    <div className={styles.captionContainer} id={styles.visitCaptionSmall}>
                            <p className={styles.caption}>Odwiedź nas</p>
                            <Image className={styles.arrow} src={arrow} alt="Strzałka"/>
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.captionContainer} id={styles.visitCaptionBig}>
                            <p className={styles.caption}>Odwiedź nas</p>
                            <Image className={styles.arrow} src={arrow} alt="Strzałka"/>
                    </div>
                    <iframe className={styles.mapBig} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7592.031689839122!2d18.588721938083786!3d54.38766404989689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7506f55a3097%3A0xaa3c60f0af207241!2sTrasernia%20Barbershop!5e0!3m2!1spl!2spl!4v1674258074319!5m2!1spl!2spl" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}