import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';


export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Futbol']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                categorias={categorias}
                setCategorias={setCategorias}
            />
            <hr/>

            <ol>

                {
                    categorias 
                    ? 
                        categorias.map(item => <GitGrid
                            key={item}
                            categoria={item}
                        />)
                    :
                        null
                }
            </ol>
        </>
    )
}


 
