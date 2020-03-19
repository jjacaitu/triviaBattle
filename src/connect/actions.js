import { SELECT_TOPICS, SET_QUESTION, ANSWER, RESTART } from "./types";

export const selectTopic = (topic, name1, name2) => {
    return {
        type: SELECT_TOPICS,
        topic: topic,
        name1: name1,
        name2: name2
    }
}

export const setQuestion = (question) => {
    return {
        type: SET_QUESTION,
        question: question
    }
}

export const answer = (points) => {
    return {
        type: ANSWER,
        points: points
    }
}

export const restart = () => {
    return {
        type: RESTART
    }
}