import React, {FC} from 'react'
import './style.scss'

interface ProgressBarProps {
    completed: number,
    amountQuestion: number
}

const ProgressBar: FC<ProgressBarProps> = ({ completed , amountQuestion}) => {

    return (
        <div className="progressBar">
            <div style={{ width: `${(100 / amountQuestion) * completed }% `, backgroundColor: "#FF7878", transition: 'width .3s' }} className="progressBar__fill">
                <span className="progressBar__label"><span>{`${completed >= 10 ? '' : 0}${completed}/`}</span>{`${amountQuestion}`}</span>
            </div>
        </div>
    );
}

export default ProgressBar;
