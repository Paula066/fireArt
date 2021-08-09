import React, {FC, useEffect, useState} from "react";
import './style.scss'
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";
import {IReduxState} from "../../index";
import {PlayerQuestion} from "../../reducers/playerQuestion";
import {decodeHtmlSpecialChar} from "../../helpers";
import user from '../../assets/svg/user.svg';
import {Routes} from "../../constants";

const Rating: FC = () => {
    const {question, user_answer} = useSelector<IReduxState, PlayerQuestion>((state) => state.playerQuestion);
    const [emptyPage, setEmptyPage] = useState(true);
    const history = useHistory();

    const amount = question?.results.length;


    const handlePlayAgainGame = () => {
        history.push(Routes.HOME);
    }

    useEffect(() => {
        if (typeof amount === 'undefined') {
            setEmptyPage(false);
        }
    }, [])

    return (
        <div className="rating">
            <div className="container rating__wrapper">
                {emptyPage ? (
                    <>
                        <div className="decorationBox">
                            <span className="decoration decoration--1"/>
                            <span className="decoration decoration--2"/>
                            <span className="decoration decoration--3"/>
                            <span className="decoration decoration--4"/>
                            <span className="decoration decoration--5"/>
                            <span className="decoration decoration--6"/>
                        </div>

                        <>
                            <div className="rating__scoredBox">
                                <img src={user}/>
                                <p className="rating__scored">
                                    You scored
                                    <span>{question?.results.filter(({correct_answer}, index) => correct_answer === user_answer[index]).length}</span>
                                    /{amount}
                                </p>
                                <span onClick={handlePlayAgainGame} className="rating__cancelIcon"/>
                            </div>
                        </>


                        <div className="rating__boxes">
                            {question?.results.map(({question, correct_answer}, index) => (
                                <div key={index}
                                     className={`rating__box rating__box--${correct_answer === user_answer[index] ? 'correctAnswer' : 'incorrectAnswer'}`}>
                                    <p>{decodeHtmlSpecialChar(question)}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={handlePlayAgainGame} className="rating__button buttonElement">PLAY AGAIN
                        </button>
                    </>
                ) : (
                    <button onClick={handlePlayAgainGame} className="rating__button buttonElement">PLAY AGAIN</button>
                )}
            </div>
        </div>

    )
}

export default Rating;
