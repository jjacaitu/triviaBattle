import React, { useEffect, useState, Fragment } from 'react';
import './App.css';

import TopicSelection from "./components/TopicsSelection";
import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Loading from "./components/Loading"


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
    <Fragment>
      <Header/>
      {loading ?
        <Loading/>
        :
        topics.length
          ?
          <GameBoard />
          :
          <TopicSelection availableTopics={availableTopics} />}
      <Footer/>

    </Fragment>

     
    
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
