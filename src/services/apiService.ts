import { NEXT_API_URL } from '@/enviroment';
import { Rebrickable } from '@/types/types';

export const sendFormData = async (formData: Rebrickable.ShippingFormData): Promise<Rebrickable.ShippingResponse> => {
    try {
        return fetch(`${NEXT_API_URL}/shipment/`,
        {
            method: 'POST',
		    body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data)  => {
            return data
        })
    } catch (e) {
        console.error(e);
        throw new Error('');
    }
}