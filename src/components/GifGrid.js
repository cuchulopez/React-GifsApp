import React from 'react'
import { useFecthGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    
    const {data:images, loading} = useFecthGifts(categoria);
     
    return (
        <>
            <h3 className="animate__animated animate__rubberBand">{categoria}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key= {img.id}
                            {...img }
                        />
                        
                        // img.title
                    ))
                }
            </div>
        </>
    );
};
