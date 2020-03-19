import React from "react";
import { selectTopic } from "./connect/actions"
import { connect} from "react-redux"

function TopicSelection({ availableTopics, dispatch, topics }) {
    let topicsSelected = [];

    const handleSelection = (e) => {
        e.preventDefault();
        const playerOne = e.target[0].value;
        const playerTwo = e.target[1].value
        dispatch(selectTopic(topicsSelected, playerOne, playerTwo));
        
    }


    const handleChange = (e) => {
        const index = e.target.value
        let exists = false;
        for (let i = 0; i < topicsSelected.length; i++){
            if (topicsSelected[i].id === availableTopics[index].id) {
                exists = true;
                topicsSelected.splice(i, 1);
                return
            }
        }

        if (!exists) {
            topicsSelected.push(availableTopics[index])   
        } 
        console.log(topicsSelected)
    }

    return (
        <form className="selectTopicDiv" onSubmit={handleSelection}>
            <p>Please enter the player's names and select at least 4 topics:</p>
            <div className="playersNames">
                <label htmlFor="playerOne" >Player One: </label>
                <input type="text" id="playerOne" required />
                <label htmlFor="playerTwo">Player Two: </label>
                <input type="text" id="playerTwo" required />
            </div>
            <ul className="topicsContainer">{availableTopics.map((topic, index) => {
                return (
                    <li className="topicElement" key={index}>
                        <input onChange={handleChange} type="checkbox" name={topic.name} id={topic.name} value={index} style={{display:"none"}} />
                        <label htmlFor={topic.name}>{topic.name}</label>
                    </li>
                )
            })}</ul>
            <button type="submit">START</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics
    }
}

export default connect(mapStateToProps,null)(TopicSelection)