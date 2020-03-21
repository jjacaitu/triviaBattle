import React from "react";
import { selectTopic } from "./connect/actions"
import { connect} from "react-redux"
import { useState } from "react";

function TopicSelection({ availableTopics, dispatch, topics }) {
    let topicsSelected = [];
    const [p1, setP1] = useState("P1")
    const [p2, setP2] = useState("P2")

    const handleSelection = (e) => {
        e.preventDefault();
        dispatch(selectTopic(topicsSelected, p1, p2));
        
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
                <input type="text" id="playerOne" onChange={(e)=>{setP1(e.target.value)}} value={p1} required />
                <label htmlFor="playerTwo">Player Two: </label>
                <input type="text" id="playerTwo" onChange={(e) => { setP2(e.target.value) }} value={p2} required />
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