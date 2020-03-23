import React, { useState } from "react";
import {answer} from "./connect/actions"
import { connect } from "react-redux"
import Alert from "./Alert"

function Question({ question, dispatch, player }) {
    
    const [points, setPoints] = useState();
    const answers = [...question.incorrect_answers, question.correct_answer].sort(function () {
        return .5 - Math.random();
    });

    const handleAnswer = (e) => {
        const answerSelected = e.target.value;
        if (answerSelected === question.correct_answer) {
            switch (question.difficulty) {
                case "easy":
                    setPoints(1);
                    break;
                case "medium":
                    setPoints(2);
                    break;
                default:
                    setPoints(3);
                    break
            }
        } else {
            setPoints(0);
        }
        
        console.log(points);
        
    }

    const next = () => {
        dispatch(answer(points));
    }



    return (
        <div className="questionContainer">
            <h2>{`Category: ${unescape(question.category)}`}</h2>
            {/* <p>{`Difficulty: ${question.difficulty}`}</p> */}
            <h3>{unescape(question.question)}</h3>
            <div className="options">

                {answers.map(answer => {
                    return <button disabled={points >= 0?true:false} onClick={handleAnswer} value={answer}>{unescape(answer)}</button>
                })}
            </div>
            
            {points !== undefined ? <Alert message={points === 0 ? `${player} Your answer was incorrect!` : `CORRECT ${player}! You win ${points} ${points>1?"points.":"point."}`} button="OK" onClick={next} /> : ""}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        player: state.players[state.player].name
    }
}

export default connect(mapStateToProps,null)(Question);