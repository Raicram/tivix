import { ShippingForm } from '@/components/shippingForm/shippingForm';
import styles from './shipping.module.scss'
import { Summary } from '@/components/summary/summary';
import { Rebrickable } from '@/types/types';

const Shipping = ({searchParams}: {searchParams: { minifig: string}}) => {

    const minifig: Rebrickable.Minifig = JSON.parse(searchParams.minifig);
    return(
        <section className={styles.section}>
                <ShippingForm id={minifig.set_num}>
                    <Summary minifig={minifig} />
                </ShippingForm> 
        </section>
    )
}

export default Shipping;