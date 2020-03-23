import React, { useState} from "react";
import { connect } from "react-redux";
import { setQuestion } from "./connect/actions";


function Roulette({ topics, player, dispatch }) {

    const [spinning, setSpinning] = useState(false);
    const [category, setCategory] = useState(topics[0] || ["popo"]);
    const [difficulty, setDifficulty] = useState("easy")

    
    const handleRadio = (e) => {
        setDifficulty(e.target.value)
    }
    
    const getQuestion = async (category, difficulty) => {
        const url = `https://opentdb.com/api.php?amount=1&category=${category.id}&difficulty=${difficulty}&type=multiple&encode=url3986`;
        
        const data = await fetch(url);
        
        const json = await data.json();

        console.log(json.results[0])
        
        dispatch(setQuestion(json.results[0]));
        setSpinning(false)
        
        
    }
    

    const spin = () => {
        setSpinning(true);
        let i = 0;
        let categorySelected = "";
        const randomNumber = Math.floor(Math.random() * 3000 + 1000);
        const interval = setInterval(() => {
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
            
            getQuestion(categorySelected, difficulty)
           
        }, randomNumber);
    }

    console.log(player)

    return (
        <div className="rouletteDiv">
            <h2>{`${player}'s turn`}</h2>
            <p className="rouletteCategory"> <span>Category:</span> {`${category.name}`}</p>
            <div className="rouletteRadioButtons">
                <input type="radio" name="easy" value="easy" id="easy" checked={difficulty === "easy"} onChange={handleRadio} />
                <label htmlFor="easy">Easy (1pt)</label>
                <input type="radio" name="medium" id="medium" value="medium" checked={difficulty === "medium"} onChange={handleRadio}/>
                <label htmlFor="medium">Medium (2pt)</label>
                <input type="radio" name="hard" id="hard" value="hard" checked={difficulty === "hard"} onChange={handleRadio} />
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