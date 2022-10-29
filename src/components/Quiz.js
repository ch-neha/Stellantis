import React, { useState } from 'react';

var QUESTIONS = [
    {
        question: "What should you do when you see a traffic sign of a school nearby?",
        option1: "Stop the vehicle",
        option2: "Slow down and proceed carefully",
        option3: "Press the horn and proceed at the same speed",
        correctOption: "option2"
    },
    {
        question: "What should you do when you see a traffic sign of a school nearby?",
        option1: "Stop the vehicle",
        option2: "Slow down and proceed carefully",
        option3: "Press the horn and proceed at the same speed",
        correctOption: "option2"
    },
    {
        question: "What should you do when you see a traffic sign of a school nearby?",
        option1: "Stop the vehicle",
        option2: "Slow down and proceed carefully",
        option3: "Press the horn and proceed at the same speed",
        correctOption: "option2"
    }
];

function Quiz() {
    var options = {};

    const [q, setQ] = useState({});

    const checkAnswers = () => {
        let newState = {};
        for (let i = 0; i < QUESTIONS.length; i++) {
            let q = QUESTIONS[i];
            let o = options[i + 1];
            console.log(q.correctOption, o);
            if (q.correctOption === o) {
                newState[i] = 'Correct!';
            } else {
                newState[i] = 'Wrong!';
            }
        }
        setQ(newState);
    };

    let quiz = QUESTIONS.map((val, key) => {
        return (
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='form-check'>
                        <div>{key + 1}. {val.question}</div>
                        <input class="form-check-input" type="radio" name={key} id={key} value={'option1'} onClick={() => { options[key + 1] = 'option1'; }} />
                        <label class="form-check-label" for={key}>
                            {val.option1}
                        </label>
                        <br />
                        <input class="form-check-input" type="radio" name={key} id={key} value={'option2'} onClick={() => { options[key + 1] = 'option2'; }} />
                        <label class="form-check-label" for={key}>
                            {val.option2}
                        </label>
                        <br />
                        <input class="form-check-input" type="radio" name={key} id={key} value={'option3'} onClick={() => { options[key + 1] = 'option3'; }} />
                        <label class="form-check-label" for={key}>
                            {val.option3}
                        </label>
                    </div>
                    {q[key]}
                </div>
                <div className='col-4'></div>
            </div>
        );
    });
    return (
        <div className='form mt-5'>
            {quiz}
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-6'>
                    <button type="button" class="btn btn-outline-success" onClick={() => checkAnswers()}>Submit</button>
                </div>
                <div className='col-4'>

                </div>
            </div>
        </div>
    );
}

export default Quiz;