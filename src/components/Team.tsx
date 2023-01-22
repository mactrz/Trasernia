import Image from "next/image";
import adam from '../../public/adam.jpg';
import marcela from '../../public/marcela.jpg';
import robert from '../../public/robert.jpg';
import styles from '../styles/Team.module.css';
import funnyArrow from '../../public/funnyArrow.svg';
import globe from '../../public/globe.svg';
import circle from '../../public/circle.svg';

interface Props {
    team: any
}

export default function Team( props: Props ) {
    return(
        <div ref={props.team} className={styles.teamContainer}>
            <h1 className={styles.teamHeader}>Poznaj naszą ekipę</h1>
            <div className={styles.memberContainer} id={styles.blue}>
                <div className={styles.member}>
                    <Image placeholder="blur" className={styles.memberPhoto} src={adam} alt="Zdjęcie fryzjera"/>
                    <p className={styles.memberName}>Adam</p>
                    <div id={styles.redRect}></div>
                    <div id={styles.blueRect}></div>
                </div>
                <p className={styles.memberText}>Strzgę bo to lubię. Fryzjerstwo to moja pasja i będziesz w stanie to dostrzec po wizycie</p>
                <Image id={styles.funnyArrow} src={funnyArrow} alt="Obrazek strzałki"/>
            </div>

            <div className={styles.memberContainer} id={styles.middle}>
                <p className={styles.memberText} id={styles.middleTextBig}>Strzgę bo to lubię. Fryzjerstwo to moja pasja i będziesz w stanie to dostrzec po wizycie</p>
                <div className={styles.member}>
                    <Image placeholder="blur" className={styles.memberPhoto} src={marcela} alt="Zdjęcie fryzjera"/>
                    <p className={styles.memberName}>Marcela</p>
                    <div id={styles.redRect}></div>
                    <div id={styles.blueRect}></div>
                </div>
                <p id={styles.middleTextSmall} className={styles.memberText}>Strzgę bo to lubię. Fryzjerstwo to moja pasja i będziesz w stanie to dostrzec po wizycie</p>
                <Image id={styles.globe} src={globe} alt="Rysunek globu"/> 
            </div>

            <div className={styles.memberContainer} id={styles.red}>
                <div className={styles.member}>
                    <Image placeholder="blur" className={styles.memberPhoto} src={robert} alt="Zdjęcie fryzjera"/>
                    <p className={styles.memberName}>Robert</p>
                    <div id={styles.redRect}></div>
                    <div id={styles.blueRect}></div>
                </div>
                <p className={styles.memberText}>Strzgę bo to lubię. Fryzjerstwo to moja pasja i będziesz w stanie to dostrzec po wizycie</p>
                <Image id={styles.circle} src={circle} alt="Rysunek koła" />
            </div>
        </div>
    )
}