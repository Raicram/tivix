import { handleFigName } from "@/helpers/helpers"
import { Rebrickable } from "@/types/types"
import Image from 'next/image'
import styles from './summary.module.scss'
import { getFigParts } from "@/services/rebrickableService"

const getAllMiniFigs = async (id: string) => {
    return await getFigParts(id);
}

export const Summary = async ({minifig}: {minifig: Rebrickable.Minifig}) => {
    const {count, results} = await getAllMiniFigs(minifig.set_num);
    return(
        <div className={styles.summaryWrapper}>
            <h2>SUMMARY</h2>
            <div className={styles.imageWrapper}>
                <Image 
                    src={minifig.set_img_url}
                    alt={minifig.name}
                    width={150}
                    height={150}
                />
            </div>
            <div className={styles.figName}>{handleFigName(minifig.name)}</div>
            <div className={styles.partsWrappert}>
                <h3>There are {count} part{count > 1 && 's'} in this minifig:</h3>
                {results.map((res) => (
                    <Part part={res.part} key={res.id}/>
                ))}
            </div>
        </div>
    )
}


const Part = ({part}: {part: Rebrickable.Part}) => (
    <div className={styles.part}>
        <Image 
            src={part.part_img_url}
            alt={part.name}
            width={65}
            height={65}
        />
        <div className={styles.partData}>
            <p>{part.name}</p>
            <span className={styles.numPart}>{part.part_num}</span>
        </div>
    </div>
)