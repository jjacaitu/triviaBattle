import React, { useState} from "react";
import { connect } from "react-redux";
import { setQuestion } from "../connect/actions";
import click from "../click.mp3";
import Loading from "./Loading"


function Roulette({ topics, player, dispatch }) {

    const [spinning, setSpinning] = useState(false);
    const [category, setCategory] = useState(topics[0]);
    const [difficulty, setDifficulty] = useState("easy");
    const [loading, setLoading] = useState(false)

    
    const handleRadio = (e) => {
        setDifficulty(e.target.value)
    }
    
    const getQuestion = async (category, difficulty) => {

        setLoading(true)

        const url = `https://opentdb.com/api.php?amount=1&category=${category.id}&difficulty=${difficulty}&type=multiple&encode=url3986`;
        
        const data = await fetch(url);
        
        const json = await data.json();
        
        dispatch(setQuestion(json.results[0]));
        setSpinning(false)
        setLoading(false)
        
        
        
    }
    

    const spin = () => {
        setSpinning(true);
        let i = 0;
        let categorySelected = "";
        const randomNumber = Math.floor(Math.random() * 3000 + 1000);
        const audio = new Audio(click);
        const interval = setInterval(() => {
            audio.play();
            categorySelected = topics[i]
            setCategory(categorySelected)
            if (i === topics.length - 1) {
                i = 0;
            } else {
                i++
            }
        }, 100 );

        setTimeout(() => {
            clearInterval(interval)
            audio.pause();
            getQuestion(categorySelected, difficulty)
           
        }, randomNumber);
    }

    return (
        <div className="rouletteDiv">
            {loading && <Loading/>}
            <h2>{`${player}'s turn`}</h2>
            <p className="rouletteCategory"> <span>Category:</span> {`${category.name}`}</p>
            <div className="rouletteRadioButtons">
                <input disabled={spinning} type="radio" name="easy" value="easy" id="easy" checked={difficulty === "easy"} onChange={handleRadio} />
                <label  htmlFor="easy">Easy (1pt)</label>
                <input disabled={spinning} type="radio" name="medium" id="medium" value="medium" checked={difficulty === "medium"} onChange={handleRadio}/>
                <label htmlFor="medium">Medium (2pt)</label>
                <input disabled={spinning} type="radio" name="hard" id="hard" value="hard" checked={difficulty === "hard"} onChange={handleRadio} />
                <label htmlFor="hard">Hard (3pt)</label>

            </div>

            <button disabled={spinning} onClick={spin}>Spin</button>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        topics: state.topics,
        player: state.players[state.player].name,
        
        
    }
}

export default connect(mapStateToProps,null)(Roulette)