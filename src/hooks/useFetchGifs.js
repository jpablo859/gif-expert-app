import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
    
    const [state, setState] = useState({
        data:[],
        loading: true
    })

    useEffect(() => {
        (async () => {
            const imgs = await getGifs(categoria);
            setState({
                data:imgs,
                loading:false
            })
        })()
    }, [categoria])

    return state;

}
