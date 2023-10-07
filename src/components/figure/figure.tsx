import Image from 'next/image'
import styles from './figure.module.scss'
import { handleFigName } from '@/helpers/helpers';


interface FigurePropsData {
    name: string;
    set_img_url: string;
    active: boolean;
}


export const Figure = ({name, set_img_url, active}: FigurePropsData) => {


    return (
        <div className={`${styles.wrapper} ${active && styles.active}`}>
            <div className={styles.imageWrapper}>
                <Image 
                    src={set_img_url}
                    alt={name}
                    width={150}
                    height={150}
                    />
            </div>
            <div className={styles.figName}>{handleFigName(name)}</div>
            <button className={styles.showDetails}>
                Show details
            </button>
        </div>
    )
}