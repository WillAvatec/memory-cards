import Card from './Card.js'
import { useState, useEffect } from 'react';
import { randomRef } from './utils/randomize.js'; //return a function that needs an array to retrieve a random element
import { getImages } from './utils/fetchImages.js';

export default function CardLogic ({scoreUpdate}){
    const [ref, setRefs] = useState({});
    const [images, setImages] = useState([]);
    const handleClick = (cardRef) => {
        if(!ref[cardRef]){
            scoreUpdate.up1();
            setRefs(prevCards => ({
                ...prevCards,
                [cardRef]:cardRef
            }))
        }
        else{
            scoreUpdate.reset();
            setRefs({});
        }
    }
    const fetchData = async () => {
        const data = await getImages();
        console.log(data);
        setImages([...data]);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <div>
            {images.map(img=>{
                return <Card  
                handleClick={handleClick}
                color={img.avg_color}
                srcUrl={img.src.portrait}
                altProp={img.alt}
                refID={img.id}
                key={img.id}
                />
            })}
        </div>
    )
}