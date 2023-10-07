import { getMinifigs } from "@/services/rebrickableService";
import { Rebrickable } from "@/types/types";
import styles from './draw.module.scss'
import { MinifigCollection } from "./minifigCollection";

const getAllMiniFigs = async () => {
    return await getMinifigs();
}


const Draw = async () => {

    const getTopThreeMinifigs = async () => {
        const minifigs = await getAllMiniFigs();
        const shuffled = minifigs.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }

    const minifigs: Rebrickable.Minifig[] = await getTopThreeMinifigs();

    return (
        <section className={styles.section}>
           <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    CHOOSE YOUR MINIFIG
                </h1>
                <MinifigCollection minifigs={minifigs} />
            </div>
        </section>
    );
}



export default Draw;