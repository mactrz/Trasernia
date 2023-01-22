import styles from '../styles/Opinions.module.css';
import star from '../../public/star.svg';
import Image from 'next/image';
import { Poppins } from '@next/font/google';

const poppins5 = Poppins({weight:"500", subsets:["latin"]})
const poppins4 = Poppins({weight:"400", subsets:["latin"]})

interface Props {
    opinions: any
}

export default function Opinions( props: Props ) {
    return(
        <div ref={props.opinions}>
            <h1 className={styles.opinionsHeader}>Poczytaj opinie naszych klientów</h1>
            <div className={styles.opinionsContainer}>
                <div className={`${styles.review} ${poppins4.className}`}>
                        <p className={styles.reviewText}>Bardzo mi się podobało, wreszcie widzę swojego penisza</p>
                        <div className={`${styles.reviewUser}`}>
                            <p className={`${styles.reviewerName} ${poppins5.className}`}>Adam</p>
                            <div className={styles.reviewerScore}>
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                            </div>
                        </div>
                        <div id={styles.redRect}></div>
                        <div id={styles.blueRect}></div>
                </div>

                <div className={styles.review}>
                        <p className={styles.reviewText}>Kocham to miejsce, wincyj!!!</p>
                        <div className={styles.reviewUser}>
                            <p className={styles.reviewerName}>Adam</p>
                            <div className={styles.reviewerScore}>
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                            </div>
                        </div>
                        <div id={styles.redRect}></div>
                        <div id={styles.blueRect}></div>
                </div>

                <div className={styles.review}>
                        <p className={styles.reviewText}>Kocham to miejsce, wincyj!!!</p>
                        <div className={styles.reviewUser}>
                            <p className={styles.reviewerName}>Adam</p>
                            <div className={styles.reviewerScore}>
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                                <Image className={styles.star} src={star} alt="Obrazek gwiazdki" />
                            </div>
                        </div>
                        <div id={styles.redRect}></div>
                        <div id={styles.blueRect}></div>
                </div>
            </div>
        </div>
    )
}