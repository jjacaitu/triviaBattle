import React, { useEffect, useState } from 'react';
import './App.css';

import TopicSelection from "./TopicsSelection";
import GameBoard from "./GameBoard"



import {connect } from "react-redux"


function App({ topics, players, question, turn  }) {

  const [availableTopics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true)

  async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    setTopics(json.trivia_categories);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl("https://opentdb.com/api_category.php");
  }, []);
  
    
  
  

  return (
    loading ? <p>loading..</p> : topics.length ? <GameBoard/> : <TopicSelection availableTopics={availableTopics} />

     
    
  );
}

const mapStateToProps = (state) => {
  return {
    topics: state.topics,
    players: state.players,
    question: state.question,
    turn: state.turn
  }
}

export default connect(mapStateToProps, null)(App);
