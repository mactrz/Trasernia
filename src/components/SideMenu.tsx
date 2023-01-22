import Image from 'next/image';
import styles from '../styles/SideMenu.module.css';
import stylesButtons from '../styles/Navbar.module.css';
import closing from '../../public/closing.svg';

interface Props {
    toggleMenuExpanded: Function,
    opinions: any,
    team: any
}

export default function SideMenu( props: Props ) {
    const moveToSection = (selection: Number) => {
        (selection === 1) ? props.opinions?.current?.scrollIntoView({behaviour: 'smooth'}): props.team?.current?.scrollIntoView({behaviour: 'smooth'})
        props.toggleMenuExpanded(false);
    }
    
    return(
        <div onClick={(e) => e.stopPropagation()} className={styles.sideMenu}>
            <Image onClick={() => props.toggleMenuExpanded(false)} className={styles.cross} src={closing} alt="Ikona krzyżyka"/>
            <button onClick={() => moveToSection(1)} className={stylesButtons.navButton}>O Nas</button>
            <button onClick={() => moveToSection(2)} className={stylesButtons.navButton}>Opinie</button>
            <a style={{all:'unset'}} href="https://booksy.com/pl-pl/149217_trasernia-barbershop-gdansk_barber-shop_20383_gdansk?do=invite&_branch_match_id=1142464896509675541&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVDy5KzDMpLc0oKkoCALfGX2giAAAA"><button className={`${stylesButtons.navButton}`}>Umów wizytę</button></a>
        </div>
    )
}