import styles from "@/styles/Welcome.module.css";
import { Poppins } from "@next/font/google";
import Image from "next/image";

const poppins5 = Poppins({weight: "500", subsets: ["latin"]});
const poppins6 = Poppins({weight: "600", subsets: ["latin"]});
const poppins7 = Poppins({weight: "700", subsets: ["latin"]});
const poppins4 = Poppins({weight: "400", subsets: ["latin"]});

export default function Welcome() {
    return (
        <div className={styles.arrowContainer}>
            <div className={styles.welcomeContainer}>
                <div className={styles.left}>
                    <Image className={styles.starsBig} src="/stars.svg" alt="Gwiazdy" width={156} height={137}/>
                    <Image className={styles.starsSmall} src="/stars.svg" alt="Gwiazdy" width={75} height={65}/>
                    <h1 className={`${styles.mainHeading} ${poppins7.className}`}>Witaj w Traserni</h1>
                    <h2 className={`${styles.subHeading} ${poppins5.className}`}>Oddaj swoje włosy w dobre ręce doświadczonej załogi</h2>
                </div>

                <div className={styles.right}>
                    <div className={`${styles.hoursHeading} ${poppins6.className}`}>Godziny otwarcia</div>
                    <div className={`${styles.days} ${poppins5.className}`}>Pon - Piątek <p className={`${styles.hours} ${poppins4.className}`}>9:00 - 21:00</p></div>
                    <div className={`${styles.days} ${poppins5.className}`}>Sobota <p className={`${styles.hours} ${poppins4.className}`}>10:00 - 16:00</p></div>
                    <div className={`${styles.days} ${poppins5.className}`}>Niedziela <p className={`${styles.hours} ${poppins4.className}`}>Nieczynne</p></div>
                </div>
            </div>
            <Image className={styles.arrow} width={58} height={34} src="/arrow.svg" alt="Strzałka"/>
        </div>
    )
}