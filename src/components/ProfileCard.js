import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/auth";
import { getUserbyId } from "../services/user";
import CircleProgressSection from '../components/CircleProgressSection';

export default function ProfileCard() {
    const [user] = useAuthState(auth);
    const [name, setname] = useState(user.displayName);
    const [points, setpoints] = useState('747');
    const [ranking, setranking] = useState('37');
    const [streak, setstreak] = useState('7');
    const [level, setlevel] = useState('Social Leader');

    useEffect(() => {
        if(user)
            getUserbyId(user.uid).then(user_data => {
                console.log(user_data)
                setname(user_data);
            })
        }
    , [user])
    return (
        <div style={{ padding: "40px" }}>
            <Card style={{ padding: "30px", }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card.Img variant="top" src={user.photoURL} style={{ width: "300px", height: "280px", borderRadius: "9px" }} />
                    <div style={{ width: "50px" }}></div>
                    <div>
                        <Card.Title style={{ fontSize: "40px" }}>{name.name}</Card.Title>
                        <Card.Text>
                            <div style={{ height: "20px" }}></div>
                            <p>Total Points Earned: <b>{name.points}</b></p>
                            <p>Current Position on Leader Board: <b>#{ranking}</b></p>
                        </Card.Text>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                           <CircleProgressSection/>
                        </div>
                    </div>
                    <div style={{ width: "50px" }}></div>
                    <div style={{ display: "flex", justifyContent: "center",flexDirection: "column" }}>
                        <Card style={{ padding: "30px", backgroundColor: "#66ff66" }}>
                            <p>Current Streak</p>
                            <h3>{streak}</h3>
                        </Card>
                        <div style={{height:"30px"}}></div>
                        <Card style={{ padding: "30px", backgroundColor: "#a366ff" }}>
                        <p>Current Level</p>
                            <h4>{level}</h4>
                        </Card>
                    </div>
                </div>

            </Card>
        </div>
    )
}