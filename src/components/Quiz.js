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
        question: "You are behind a bus that has stopped to pick up or drop off passengers. You should",
        option1: "Overtake from the right",
        option2: "Overtake from the left",
        option3: "Wait behind patiently",
        correctOption: "option3"
    },
    {
        question: "Which age group is most likely to be involved in a road accident ?",
        option1: "17 To 25 year Olds",
        option2: "26 to 45 year olds",
        option3: "55 year olds and over",
        correctOption: "option1"
    }
];

function Quiz() {
    var options = {};
    const [q, setQ] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const checkAnswers = () => {
        let newState = {};
        var correctCount = 0;
        for (let i = 0; i < QUESTIONS.length; i++) {
            let q = QUESTIONS[i];
            let o = options[i + 1];
            console.log(q.correctOption, o);
            if (q.correctOption === o) {
                newState[i] = 'Correct!';
                correctCount += 1;
            } else {
                newState[i] = 'Wrong! Answer was: ' + q[q.correctOption];
            }
        }
        setQ(newState);
        setSubmitted(!submitted);
    };

    let quiz = QUESTIONS.map((val, key) => {
        return (
            <div className='row' key={key}>
                <div className='col-2'></div>
                <div className='col-6 my-2'>
                    <div className='form-check'>
                        <div>{key + 1}. {val.question}</div>
                        <input className="form-check-input" type="radio" name={key} id={key} value={'option1'} onClick={() => { options[key + 1] = 'option1'; }} />
                        <label className="form-check-label" htmlFor={key}>
                            {val.option1}
                        </label>
                        <br />
                        <input className="form-check-input" type="radio" name={key} id={key} value={'option2'} onClick={() => { options[key + 1] = 'option2'; }} />
                        <label className="form-check-label" htmlFor={key}>
                            {val.option2}
                        </label>
                        <br />
                        <input className="form-check-input" type="radio" name={key} id={key} value={'option3'} onClick={() => { options[key + 1] = 'option3'; }} />
                        <label className="form-check-label" htmlFor={key}>
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
                    {!submitted ? <button type="button" className="btn btn-outline-success" onClick={() => checkAnswers()}>Submit</button> : ''}
                </div>
                <div className='col-4'>

                </div>
            </div>
        </div>
    );
}

export default Quiz;