import { ShippingForm } from '@/components/shippingForm/shippingForm';
import styles from './shipping.module.scss'
import { Summary } from '@/components/summary/summary';

const Shipping = ({searchParams}: {searchParams: { minifig: string}}) => {

    const minifig = JSON.parse(searchParams.minifig);
    return(
        <section className={styles.section}>
                <ShippingForm>
                    <Summary minifig={minifig} />
                </ShippingForm> 
        </section>
    )
}

export default Shipping;