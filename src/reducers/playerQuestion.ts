import {IGETQuestions} from "../interfaces";

export interface PlayerQuestion {
    question: IGETQuestions | null;
    user_answer: Array<string>
}

export enum PlayerActionTypes {
    GET_QUESTION = 'GET_QUESTION',
    CHECK_QUESTION = 'CHECK_QUESTION'
}

type Actions = { type: PlayerActionTypes.GET_QUESTION, payload: IGETQuestions }
    | { type: PlayerActionTypes.CHECK_QUESTION; payload: string };

const initialState : PlayerQuestion = {
    question: null,
    user_answer: []
}

const playerQuestion = (state= initialState, action: Actions) => {
    switch (action.type) {
        case PlayerActionTypes.GET_QUESTION:
            return {...state, question: action.payload };
        case PlayerActionTypes.CHECK_QUESTION:
            return {...state, user_answer: [...state.user_answer, action.payload]};
        default:
            return state;
    }
}

export default playerQuestion;
