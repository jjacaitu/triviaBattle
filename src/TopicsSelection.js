import React from "react";
import { selectTopic } from "./connect/actions"
import { connect} from "react-redux"
import { useState } from "react";
import Alert from "./Alert" 

function TopicSelection({ availableTopics, dispatch}) {
    // let topicsSelected = [];
    const [topicsSelected, setTopics] = useState([])
    const [p1, setP1] = useState("P1")
    const [p2, setP2] = useState("P2")
    const [alert, setAlert] = useState(false)

    const handleSelection = (e) => {
        e.preventDefault();
        // console.log(topics)
        if(topicsSelected.length >= 4){
            dispatch(selectTopic(topicsSelected, p1, p2));
        }else{
            setAlert(true)
        }
        
    }


    const handleChange = (e) => {
        const index = e.target.value
        let exists = false;
        for (let i = 0; i < topicsSelected.length; i++){
            if (topicsSelected[i].id === availableTopics[index].id) {
                exists = true;
                const topics = [...topicsSelected];
                topics.splice(i, 1)
                setTopics(topics);
                return
            }
        }

        if (!exists) {
            const topics = [...topicsSelected];
            topics.push(availableTopics[index])
            setTopics(topics);   
        } 

        // setTopics(topicsSelected);
        
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
                        <input tabIndex={0} onChange={handleChange} type="checkbox" name={topic.name} id={topic.name} value={index} />
                        <label  htmlFor={topic.name}>{topic.name}</label>
                    </li>
                )
            })}</ul>
            {alert ? <Alert message="Please select at least 4 topics from the list!" button="OK" onClick={()=>{setAlert(false)}}/> : ""}
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