import React, { useState } from 'react'
import CircleProgress from './CircleProgress'
import axios, * as others from 'axios';

const data = [
    0.1,
    0.0,
    0.8,
    36.0,
    67.0,
    0.0,
    78.0,
    0.0,
    11,
    0.0,
    0.0,
    0.0,
    0.0
];
const params = {'currRecord': data};

async function makePostRequest(f) {
    let res = await axios.post('http://127.0.0.1:5000/getBehavourial', params);
    const temp = parseFloat(res.data['result']).toFixed(2) * 10
    f(temp)
}

export default function CircleProgressSection() {
    const [safetyScore, setSafetyScore] = useState(65);
    makePostRequest(setSafetyScore);
  return (
    <div>
        <div className="container">
            <div className="row">
            <div className="col-3">
                <CircleProgress percentage={safetyScore} text={'Behavioural score'}/>
            </div>
            <div className="col-3">
                <CircleProgress percentage={77} text={'health'}/>
            </div>
            <div class="col-3">
                <CircleProgress percentage={33} text={'Eco-Friendly'}/>
            </div>
            <div className="col-3">
                <CircleProgress percentage={26} text={'Daily Task'}/>
            </div>
            </div>
        </div>
    </div>
  )
}
