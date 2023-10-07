'use client';

import { Button } from "@/components/button/button"
import { Figure } from "@/components/figure/figure"
import { Rebrickable } from "@/types/types"
import styles from './draw.module.scss'
import Link from "next/link"
import { useState } from "react"

export const MinifigCollection = ({minifigs}: {minifigs: Rebrickable.Minifig[]}) => {
    const [pickedFig, setPickedFig] = useState<Rebrickable.Minifig>();

    return(
        <>
            <div className={styles.minifigWrapper}>
                {minifigs.map((minifig) => (
                    <div onClick={() => setPickedFig(minifig)} key={minifig.name}>
                        <Figure 
                            name={minifig.name}
                            set_img_url={minifig.set_img_url}
                            active={pickedFig?.set_num === minifig.set_num}
                        />
                    </div>
                ))}
            </div>
            <Link href={{pathname: '/shipping', query: { minifig: JSON.stringify(pickedFig)} }} className={styles.link}>
                <Button disabled={!!!pickedFig}>
                    PROCEED TO SHIPMENT
                </Button>
            </Link>
        </>
    )
}