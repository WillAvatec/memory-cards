import ScoreDisplay from './Score.js'
import CardLogic from './CardLogic.js'
import { useState } from 'react';

export default function Main (){
    const [score, setScore] = useState(0);
    const [highS, setHighS] = useState(0);
    const scoreLogic = (() => {
        return {
            reset:() => setScore(0),
            up1:() => {
                setScore(score+1);
                if(highS <= score) setHighS(highS+1);
            }
        }
    })()


    return (
        <div>
            <ScoreDisplay score={score} highS={highS}/>
            <div className="main-wrapper">
                <CardLogic scoreUpdate={scoreLogic} />
            </div>
        </div>
    )
}