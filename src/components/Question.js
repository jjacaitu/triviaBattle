import React, { useState } from "react";
import {answer} from "../connect/actions"
import { connect } from "react-redux"
import Alert from "./Alert"

function Question({ question, dispatch, player }) {
    
    const [points, setPoints] = useState();

    // store all the answers, correct and incorrect and shuffle them

    const answers = [...question.incorrect_answers, question.correct_answer].sort(function () {
        return .5 - Math.random();
    });

    // Handle answer submition, if the selected answer is correct add points if not give 0 points.

    const handleAnswer = (e) => {
        const answerSelected = e.target.value;

        // Set amount of point depending on the difficulty of the question

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
    }

    const next = () => {
        // dispatch points to the state
        dispatch(answer(points));
    }



    return (
        <div className="questionContainer">
            <h2>{`Category: ${unescape(question.category)}`}</h2>
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