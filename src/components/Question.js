import React, { useState } from "react";
import {answer} from "../connect/actions"
import { connect } from "react-redux"
import Alert from "./Alert"
import jeopardy from "../jeopardy.mp3"
import ding from "../ding.mp3"
import wrong from "../wrong.mp3"
import { useEffect } from "react";

function Question({ question, dispatch, player }) {
    
    const answers = [...question.incorrect_answers, question.correct_answer].sort(function () {
        return .5 - Math.random();
    });

    const [points, setPoints] = useState();
    const [time, setTime] = useState(15);
    const [audio, setAudio] = useState(new Audio(jeopardy));
    const [availableAnswers] = useState(answers)

    // store all the answers, correct and incorrect and shuffle them


    // Handle answer submition, if the selected answer is correct add points if not give 0 points.

    
    useEffect(() => {

        time >= 10 && audio.play();

        const timer =  setTimeout(() => {
            if (time === 0 ) {
                clearTimeout(timer)
                audio.pause();
                setAudio(new Audio(wrong))
                setPoints(0);
            } else if(points === undefined) {
                
                setTime(time - 1)
            }
        }, 1000);
        
    }, [time])
    
    useEffect(() => {
        audio.play()
    },[audio])




    const handleAnswer = (e) => {
        const answerSelected = e.target.value;

        // Set amount of point depending on the difficulty of the question

        if (answerSelected === question.correct_answer) {
            audio.pause();
            setAudio(new Audio(ding))
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
            audio.pause();
            setAudio(new Audio(wrong))
            setPoints(0);
        }
        
        
    }

    const next = () => {
        // dispatch points to the state
        
        dispatch(answer(points));
    }



    return (
        <div className="questionContainer">
            <div className="timer">
                
                <i className="fas fa-stopwatch" aria-label="Timer:"></i>
                <div className="timerContainer">

                    <div className="timerInner" style={
                    {
                        width: `${100 - ((100 / 15) * (15 - time))}%`,
                        backgroundColor: `${time > 5 ? "gold" : "var(--brightColour)"}`
                    }
                    }>

                    </div>

                </div>
            </div>

            <h2>{`Category: ${unescape(question.category)}`}</h2>
            <h3>{unescape(question.question)}</h3>
            <div className="options">

                {availableAnswers.map(answer => {
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