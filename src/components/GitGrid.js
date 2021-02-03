
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GitGrid = ({categoria}) => {

    const { data, loading} = useFetchGifs(categoria);

    console.log(data)
    
    return (
        <>
            <h3>{categoria}</h3>  
            { loading && <p>Cargando ...</p>}
            <div className="card-grid">
                {
                    data
                    ? 
                        data.map(img => 
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        )
                    :
                        null
                }
            </div>
        </>
    )
}
