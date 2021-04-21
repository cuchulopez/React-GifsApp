import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFecthGifts = (categoria) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {
        
        getGifts(categoria)
            .then( imgs => {
                setTimeout(() => {
                    
                    setState({
                        data:imgs,
                        loading:false
                    });
                },500);
            });

    }, [categoria]);

    return state;
};