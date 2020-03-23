import React from "react";
import Roulette from "./Roulette"
import ScoreBoard from "./ScoreBoard"
import Question from "./Question"
import Alert from "./Alert"
import { connect } from "react-redux";
import { restart } from "./connect/actions"



function GameBoard({ question, turn, playerOneScore, playerTwoScore, playerOne, playerTwo, dispatch }) {
    
    const restartGame = () => {
        dispatch(restart())
    }
    
    return (
        <div className="gameBoard">
            <ScoreBoard/>
            
            {question !== null ? <Question question={question} /> : <Roulette /> }
            {turn !== 6 ? "" : <Alert message={playerOneScore === playerTwoScore ? "It's a tie! Play again and see who wins!" : playerOneScore > playerTwoScore ? `${playerOne} Wins !!! Hey ${playerTwo} can you beat ${playerOne}? Ask for a REMATCH!` : `${playerTwo} Wins!!! Hey ${playerOne} can you beat ${playerTwo}? Ask for a REMATCH!`} button="Restart" onClick={restartGame}/>}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        question: state.question,
        turn: state.turn,
        playerOneScore: state.players.player1.score,
        playerTwoScore: state.players.player2.score,
        playerOne: state.players.player1.name,
        playerTwo: state.players.player2.name,
    }
}

export default connect(mapStateToProps, null)(GameBoard)