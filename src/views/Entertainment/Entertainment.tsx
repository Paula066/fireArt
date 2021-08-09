import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IReduxState} from '../../'
import {PlayerActionTypes, PlayerQuestion} from "../../reducers/playerQuestion";
import {useParams, useHistory} from 'react-router-dom';
import {Routes} from "../../constants";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {decodeHtmlSpecialChar} from '../../helpers'
import './style.scss'

type trueOrFalse = 'True' | 'False';

const Entertainment: FC = () => {
    const {question} = useSelector<IReduxState, PlayerQuestion>((state) => state.playerQuestion)
    const {id} = useParams<{ id?: string }>();
    const history = useHistory();
    const dispatch = useDispatch();

    const amountQuestion = question?.results.length;

    if (!id || !question) {
        history.push(Routes.HOME)
    }

    const handleAnswerUser = (userAnswer: trueOrFalse) => {
        if (parseInt(id!) + 1 > amountQuestion!) {
            history.push(`${Routes.RATING}`)
            return;
        }

        dispatch({type: PlayerActionTypes.CHECK_QUESTION, payload: userAnswer});
        history.push(`${Routes.VIDEO_GAME}/${parseInt(id!, 10) + 1}`)
    }

    useEffect(() => {
        if (!question?.results[parseInt(id!, 10)]) {
            history.push(Routes.RATING)
            return;
        }
    }, [id])


    const questionGame  = question?.results[parseInt(id!, 10)]?.question || '';

    return (
        <div className="entertainment">
            <div className="decorationBox">
                <span className="entertainment__decoration entertainment__decoration--1"/>
                <span className="entertainment__decoration entertainment__decoration--2"/>
                <span className="entertainment__decoration entertainment__decoration--3"/>
                <span className="entertainment__decoration entertainment__decoration--4"/>
                <span className="entertainment__decoration entertainment__decoration--5"/>
            </div>
            <div className="container entertainment__wrapper">
                <h4 className="entertainment__header">Entertainment: <br/>Videogames</h4>
                <span className="entertainment__level">level 1</span>
                <ProgressBar amountQuestion={amountQuestion!} completed={parseInt(id!, 10) + 1}/>
                <p className="entertainment__question">{decodeHtmlSpecialChar(questionGame!)}</p>
                <div className="entertainment__buttonBox">
                    <button onClick={() => handleAnswerUser('True')} className="buttonElement">TRUE</button>
                    <button onClick={() => handleAnswerUser('False')} className="buttonElement">FALSE</button>
                </div>
            </div>
        </div>
    )
}

export default Entertainment;
