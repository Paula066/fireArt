import React, {FC, useState} from "react";
import triviaLogo from '../../assets/svg/trivia-logo.png';
import {Question} from '../../interfaces'
import Api from "../../services/Api";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import {PlayerActionTypes} from '../../reducers/playerQuestion';
import './style.scss'
import {Routes} from "../../constants";

type Difficulty = 'hard' | 'easy';

const WelcomeTrivia: FC = () => {

    const [amountInput, setAmountInput] = useState('');
    const [levelGame, setLevelGame] = useState<Difficulty>('hard');
    const [validationAmountFiled, setValidationAmountFiled] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const getGameLevel = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const { value } = event.currentTarget;
        setLevelGame(value as Difficulty)
    }

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;
        if ( /^\d*$/.test(value))
            setAmountInput(value);
    }

    const startGame = () => {
        const url = 'https://opentdb.com';
        if (amountInput === '') {
            setValidationAmountFiled(true);
            return;
        }
        getResult(url, levelGame)
    }


    const updateQuestion = (question: Question): void => {
        dispatch({ type: PlayerActionTypes.GET_QUESTION, payload: question });
        history.push(`${Routes.VIDEO_GAME}/0`)
    }

    const getResult = (url: string, levelGame: string) => {
        Api.get<Question>(url, amountInput, levelGame).then(updateQuestion)
    }

    return (
        <div className="welcomeTrivia">
            <div className="decorationBox">
                <span className="decoration decoration--1" />
                <span className="decoration decoration--2" />
                <span className="decoration decoration--3" />
                <span className="decoration decoration--4" />
                <span className="decoration decoration--5" />
            </div>

            <div className="container welcomeTrivia__wrapper">
                <div>
                    <h4 className="welcomeTrivia__header">Welcome to the</h4>
                    <img className="welcomeTrivia__logo" src={triviaLogo} />
                </div>
                <div className="welcomeTrivia__form">
                    <span className="welcomeTrivia__text welcomeTrivia__text--difficulty">Difficulty</span>
                    <div className="welcomeTrivia__difficulty">
                        <select className="welcomeTrivia__select inputElement" onChange={getGameLevel}>
                            <option value="hard">hard</option>
                            <option value="easy">easy</option>
                        </select>
                    </div>
                    <span className="welcomeTrivia__text welcomeTrivia__text--amount">Amount</span>
                    <input pattern="\d*" value={amountInput} onInput={handleAmountChange} className={`welcomeTrivia__amount inputElement ${validationAmountFiled ? 'welcomeTrivia__amount--wrongValidation' : ''}`}/>
                    <button onClick={startGame} className="welcomeTrivia__button buttonElement">START</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeTrivia;
