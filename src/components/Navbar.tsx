import styles from '../styles/Navbar.module.css';
import { Stardos_Stencil, Poppins } from '@next/font/google';
import Image from 'next/image';
import burgir from '../../public/burgir.svg';

const stardos = Stardos_Stencil({weight: '700', subsets: ["latin"]});
const poppins = Poppins({weight: "400", subsets: ["latin"]});

interface Props {
    opinions: any;
    team: any;
    toggleMenuExpanded: Function
}

export default function Navbar( props: Props ) {

    const moveToSection = (selection: Number) => {
        (selection === 1) ? props.opinions?.current?.scrollIntoView({behaviour: 'smooth'}): props.team?.current?.scrollIntoView({behaviour: 'smooth'})
        props.toggleMenuExpanded(false);
    }

    return(
        <div className={styles.navbarContainer}>
            <p className={`${styles.logo} ${stardos.className}`}>Trasernia</p>
            <div className={`${styles.navButtons} ${poppins.className}`}>
                <button onClick={() => moveToSection(1)} className={styles.navButton}>O nas</button>
                <button onClick={() => moveToSection(2)} className={styles.navButton}>Opinie</button>
                <a style={{all:'unset'}} href='https://booksy.com/pl-pl/149217_trasernia-barbershop-gdansk_barber-shop_20383_gdansk?do=invite&_branch_match_id=1142464896509675541&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVDy5KzDMpLc0oKkoCALfGX2giAAAA'><button className={styles.navButton}>Umów wizytę</button></a>
            </div>
            <Image onClick={(e) => {props.toggleMenuExpanded(true); e.stopPropagation()}} className={styles.burgir} src={burgir} alt="Menu" />
        </div>
    )
}