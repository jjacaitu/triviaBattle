import React from "react";
import { connect } from "react-redux";


function ScoreBoard({ playerOneName, playerTwoName, playerOneScore, playerTwoScore, turn}){
    return(
        <div className="ScoreBoard">
            <p>{`Current turn: ${turn}`}</p>
            <div className="playersScores">
                <p>{`${playerOneName}: ${playerOneScore}`}</p>
                <p>{`${playerTwoName}: ${playerTwoScore}`}</p>

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