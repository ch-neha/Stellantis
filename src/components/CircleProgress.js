import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircleProgress({percentage, text}) {
    // const percentage = 77;
    // const text = "Safety"

  return (
    <div>
        <div style={{ width: 200, height: 200 }} className={'mx-auto'}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <p className='m-2'>{text}</p>
    </div>
  )
}
