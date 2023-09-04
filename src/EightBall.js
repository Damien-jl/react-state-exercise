import React, {useState} from 'react'
import {pick} from './randomInd'
import defaultAnswers from './answers.json'
import './EightBall.css'

function EightBall ({answers = defaultAnswers}) {
    const [answer, setAnswer] = useState({
        msg: "Think of a question",
        color: "black",
    });

    function clickHandle() {
        setAnswer(pick(answers))
    }
    return (
        <div 
        className="EightBall"
        onClick={clickHandle}
        style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
       </div>
    );
}

export default EightBall;