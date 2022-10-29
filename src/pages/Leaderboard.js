import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

export default function LeaderBoard() {
    
    const [data, setData] = useState([{
        name: "Hanna",
        location: "India",
        score : 1550,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-06-1",
        level:"Rookie"
    },
    {
        name: "Shawn Mendes",
        location: "India",
        score : 5550,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-05-29",
        level:"Social Leader"
    },
    {
        name: "Camila",
        location: "India",
        score : 1750,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-05-30",
        level:"The Wise"
    },
    {
        name: "Shawn Hanna",
        location: "India",
        score : 1550,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-02-10",
        level:"The Wise"
    },
    {
        name: "Fidel Hand",
        location: "USA",
        score : 2310,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2021-01-01",
        level:"Social Servent"
    },])
    
    
    return <div className='container'>
    {
        data.map((value, index) => (
            <div className="flex" key={index}>
                <div className="item">
                    <img src={value.img} alt="" />

                    <div className="info" style={{fontSize:"20px",width:"200px"}}>
                        <h3 className='name text-dark' >{value.name}</h3>
                        <span>{value.location}</span>
                    </div>
                </div>
                <div className="item">
                    <span>{value.score} Points</span>
                </div>
                {/* <div className="item">
                    <img src={badge1} style={{ width: "50px" }} alt="badge1" />
                </div> */}
                 {/* {index%3==0? <div className="item"> <img src={badge2} style={{ width: "50px" }} alt="badge1" /> </div>: <div className="item" ><p style={{ width: "50px" }}></p></div>}  */}
            
                 <div className="item">
                 <Card style={{ padding: "20px", backgroundColor: "#66ff66",height:"150px" }}>
                    <p>Streak</p>
                    <h4>{index+2}</h4>
                </Card>
                </div>
                {/* <div className="item">
                    {
                        assignLevel(value.level)
                    }
                </div> */}
            </div>
            )
        )
    }
</div>
}