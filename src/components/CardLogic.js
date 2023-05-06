import Card from './Card.js'
import { useState } from 'react';

export default function CardLogic ({scoreUpdate}){
    const [cards, setCards] = useState({});
    const handleClick = (cardRef) => {
        if(!cards[cardRef]){
            scoreUpdate.up1();
            setCards(prevCards => ({
                ...prevCards,
                [cardRef]:cardRef
            }))
        }
        else{
            scoreUpdate.reset();
            setCards({});
        }
    }
    


    return(
        <div>
            <Card handleClick={handleClick} refID={1}/>
            <Card handleClick={handleClick} refID={2}/>
            <Card handleClick={handleClick} refID={3}/>
            <Card handleClick={handleClick} refID={4}/>
        </div>
    )
}