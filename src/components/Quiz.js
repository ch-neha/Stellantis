import React, { useState, useEffect } from 'react';
import MyToast from './MyToast';
import { auth } from "../services/auth";
import { getUserbyId, updateUser } from "../services/user";
import { useAuthState } from "react-firebase-hooks/auth";

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

var cc = 0;

function Quiz() {
    var options = {};

    const [showToast, setShowToast] = useState(false)
    const [q, setQ] = useState({});
    const [correctCount, setCorrectCount] = useState(0)
    const [submitted, setSubmitted] = useState(false);
    const [user] = useAuthState(auth);

    useEffect(() => {
        setCorrectCount(correctCount => correctCount + 1);
      }, []); 
    
    const checkAnswers = async () => {
        let newState = {};
        setCorrectCount(0);
        cc = 0;
        for (let i = 0; i < QUESTIONS.length; i++) {
            let q = QUESTIONS[i];
            let o = options[i + 1];
            console.log(q.correctOption, o);
            if (q.correctOption === o) {
                newState[i] = 'Correct!';
                setCorrectCount(correctCount + 1)
                cc += 1
            } else {
                newState[i] = 'Wrong! Answer was: ' + q[q.correctOption];
            }
        }
        console.log(cc)
        setQ(newState);
        if(correctCount > 0) {
            setShowToast(true);
        }
        console.log('heyyyyyyy')
        const user_data = await getUserbyId(user.uid);
            updateUser(user.uid, {
            points: user_data.points + cc * 2,
        });
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
            <MyToast 
                showToast={showToast} 
                setShowToast={setShowToast} 
                imgurl={'../assets/gold-coin.gif'} 
                head1={'Points Added'}
                head2={"+" + cc * 2}
                body={"Woohoo, you're rewarded for being a great driver!"}
            />
        </div>
    );
}

export default Quiz;