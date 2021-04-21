import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'

const GifExpertApp = () => {
    //const categorias = ['Carpintería','Pinturería','Electricidad'];

    const [categorias, setCategorias] = useState(['Surf']);

    // const handleAdd = () => {
    //     const categoria = 'Herramientas';
    //     // const newCategorias = categorias.concat(categoria);
    //     // setcategorias(newCategorias);

    //     setCategorias(categs => [...categs, categoria]);
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = {setCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map( categ => (
                        <GifGrid 
                            key= { categ }    
                            categoria ={ categ } 
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;