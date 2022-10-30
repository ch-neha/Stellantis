import React from 'react'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Button } from 'react-bootstrap';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)


export default function ProfileChart() {

    const [pointsPerMonthdata, setPointsPerMonthdata] = useState({
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Points Earned",
                data: [10, 42, 51, 82, 75, 110, 173, 291, 300, 355, 415, 458],
                backgroundColor: '#ffcccc',
                borderColor: '#ff1a1a',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true
            },
        ]
    });


    const [drivesafety, setleaderBoradRankingPerMonth] = useState({
        labels: ["Monday", "Tue", "Wed", "Thursday", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Rank",
                data: [0, 1, 2, 2, 7, 3, 4,10],
                backgroundColor: '#ffffff',
                borderColor: '#33ff77',
                tension: 0.4,
                fill: false,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true,
            }
        ]
    })

    const [violations, setViolations] = useState({
        labels: ["24th Oct, Mon", "25th Oct, Tue", "26th Oct, Wed", "27th Oct, Thur", "28th Oct, Fri", "29th Oct, Sat", "30th Oct, Sun", "31st Oct, Mon" ],
        datasets: [
            {
                label: "Violations",
                data: [5, 2, 6, 0, 3, 6, 8, 3, 2],
                backgroundColor: '#b3d9ff',
                borderColor: '#3399ff',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true
            }
        ]
    })

    
    return (
        <div>
            <br></br><br></br>

                <div >
                    <div className='row m-4'>
                        
                        <div className='col-6'>
                        <h3>Drive Rating</h3>
                        <Line data={drivesafety}></Line>
                        </div>

                        <div className='col-6'>
                        <h3>Points earned over the year</h3>
                        <Line data={pointsPerMonthdata}></Line>
                        </div>
                    </div>

                    <be></be><br></br><br></br>
                    <be></be><br></br><br></br>

                    <div style={{ width: "900px", display: "flex", margin: "auto", flexDirection: "column" }}>
                        <h3 className='text-center'>Number of violations over the last week</h3>
                        <Line data={violations}></Line>
                    </div>
                    <div style={{height:"20px"}}></div>
                </div>
                
                
        
        </div>
    );
}





