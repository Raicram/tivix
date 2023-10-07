import { API_PATH, API_KEY } from "@/enviroment";
import { Rebrickable } from '@/types/types'

export const getMinifigs = async (): Promise<Rebrickable.Minifig[]> => {
    try {
        /* theme_id is used to get Figures from one universum
        id 246 is used by Harry Potter universum  */
        return fetch(`${API_PATH}/minifigs/?in_theme_id=246`,
        {
            method: 'GET',
		    headers: {
			    'Authorization': `key ${API_KEY}`,
		    }
        })
        .then(res => res.json())
        .then((data: Rebrickable.MinifigResponse)  => {
            return data.results
        })
    } catch (e) {
        console.error(e);
        return []
    }
}

export const getFigParts = async (figID: string): Promise<Rebrickable.FigPartsResponse> => {
    try {
        return fetch(`${API_PATH}/minifigs/${figID}/parts/`,
        {
            method: 'GET',
		    headers: {
			    'Authorization': `key ${API_KEY}`,
		    }
        })
        .then(res => res.json())
        .then((data: Rebrickable.FigPartsResponse)  => {
            return data
        })
    } catch (e) {
        console.error(e);
        throw new Error('');
    }
}