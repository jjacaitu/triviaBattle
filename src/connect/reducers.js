import { SELECT_TOPICS, SET_QUESTION, ANSWER, RESTART } from "./types";


const initialState = {
    topics: [],
    players: {
        player1: {
            name: "",
            score: 0
        },
        player2: {
            name: "",
            score: 0
        }
    },
    turn: 1,
    player: "player1",
    question: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TOPICS:
            console.log(action.topic)
            return Object.assign({}, state, {
                topics: [...action.topic],
                players: {
                    player1: {
                        name: action.name1,
                        score: 0
                    },
                    player2: {
                        name: action.name2,
                        score: 0
                    }
                },
                player: "player1"

            });
        case SET_QUESTION:
            return Object.assign({}, state, {
                question: action.question
            });
        case ANSWER:
            
            
            return Object.assign({}, state, {
                question: null,
                player: state.player === "player1" ? "player2" : "player1",
                turn: state.player === "player2" ? state.turn + 1 : state.turn,
                players: {
                    player1: {
                        score: state.player === "player1" ? state.players.player1.score + action.points : state.players.player1.score,
                        name: state.players.player1.name
                        
                    },
                    player2: {
                        score: state.player === "player2" ? state.players.player2.score + action.points : state.players.player2.score,
                        name: state.players.player2.name
                    }
                }


            });
        case RESTART:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}

export default reducer;


