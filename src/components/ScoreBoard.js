import React from "react";
import { connect } from "react-redux";


function ScoreBoard({ playerOneName, playerTwoName, playerOneScore, playerTwoScore, turn}){
    return(
        <div className="scoreBoard">
            <h3>{turn < 5 ? `Turns Remaning: ${6 - turn}` : "Last Turn!"}</h3>
            <div className="playersScores">
                
                <p> <span>{`${playerOneName}: `}</span> {`${playerOneScore}`}</p>
                <p>VS</p>
                <p><span>{`${playerTwoName}: `}</span>{`${playerTwoScore}`}</p>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playerOneName: state.players.player1.name,
        playerTwoName: state.players.player2.name,
        playerOneScore: state.players.player1.score,
        playerTwoScore: state.players.player2.score,
        turn: state.turn
    }
}

export default connect(mapStateToProps,null)(ScoreBoard)