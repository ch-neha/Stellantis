import React, { useState, useEffect } from "react";
import "./style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/auth";
import { getUserbyId } from "../services/user";


export default function LeaderBoard() {
const [user] = useAuthState(auth);
const [user_data, setdata] = useState()
  const [data, setData] = useState([
        {
          name: "Hanna",
          location: "India",
          points: 550,
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-06-1",
          streak: 10,
          level: "Rookie",
        },
        {
          name: "Shawn Mendes",
          location: "India",
          points: 440,
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-05-29",
          streak: 7,
          level: "Social Leader",
        },
        {
          name: "Camila",
          location: "India",
          points: 350,
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-05-30",
          streak: 2,
          level: "The Wise",
        },
        {
          name: "Shawn Hanna",
          location: "India",
          points: 225,
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-02-10",
          streak: 6,
          level: "The Wise",
        },
        {
          name: "Fidel Hand",
          location: "USA",
          points: 100,
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2021-01-01",
          streak: 1,
          level: "Social Servent",
        },
        {
          name: "Bessie Hickle",
          location: "China",
          points: 1350,
          img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2021-08-17",
          streak: 10,
          level: "Social Servent",
        },
        {
          name: "Adella Wunsch",
          location: "Japan",
          points: 1100,
          img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2021-10-23",
          streak: 10,
          level: "Social Servent",
        },
        {
          name: "Clair O'Connell",
          location: "London",
          points: 1050,
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-01-22",
          streak: 10,
          level: "The Wise",
        },
        {
          name: "Kameron Prosacco",
          location: "Canada",
          points: 750,
          img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-01-21",
          level: "The Wise",
          streak: 10,
        },
        {
          name: "Fidel Hand",
          location: "China",
          points: 3350,
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2021-08-17",
          streak: 10,
          level: "Social Servent",
        },
        {
          name: "Adella Wunsch",
          location: "Japan",
          points: 2100,
          img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2021-10-23",
          streak: 10,
          level: "Social Servent",
        },
        {
          name: "Clair O'Connell",
          location: "London",
          points: 1950,
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-01-22",
          streak: 10,
          level: "The Wise",
        },
        {
          name: "Kameron Prosacco",
          location: "Canada",
          points: 1750,
          img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
          dt: "2022-01-21",
          level: "The Wise",
          streak: 10,
        },
  ]);

  const [period, setPeriod] = useState({start: 0, end: 600});

  const handleClick = (e) => {
    setPeriod({start: 0, end: 600})
  };

  const handleClick2 = (e) => {
    setPeriod({start: 600, end: 1500})
  };

  const handleClick3 = (e) => {
    setPeriod({start: 1500, end: 3500})
  };

  useEffect(() => {
    if(user)
        getUserbyId(user.uid).then(user_data => {
            console.log(user_data)
            if(data.filter(val => val && val.id).length) {
                setData(data.map(val => {
                    if(val && val.id && val.id === user_data.id)
                        return {
                            id: user_data.id,
                            name: user_data.name,
                            location: "India",
                            points: user_data.points ? user_data.points: 0,
                            img: user_data.photoURL,
                            level: "The Wise",
                            streak: 2,
                        }
                    return val;
                }))
            } else {
            setData([...data, {id: user_data.id,

                name: user_data.name,
                location: "India",
                points: user_data.points ? user_data.points: 0,
                img: user_data.photoURL,
                level: "The Wise",
                streak: 2,
                }])
            }
        })
  },[user]);

  return (
    <div
      className="container"
      style={{ width: "50%", justifyContent: "center" }}
    >
      <h1 className="text-primary mt-5 text-center">Leaderboard</h1>

      <div className="duration d-flex justify-content-center">
        <button type="button" class="btn btn-danger m-1" onClick={handleClick}>
          Bronze
        </button>
        <button type="button" class="btn btn-secondary m-1" onClick={handleClick2}>
          Silver
        </button>
        <button type="button" class="btn btn-warning m-1" onClick={handleClick3}>
          Gold
        </button>
      </div>

      <br></br>
      <br></br>

      <table className="table table-hover">
        <thead>
          <th>Rank</th>
          <th>Image</th>
          <th>Name</th>
          <th>Points</th>
          <th>Streak</th>
        </thead>
        <tbody>
            
          {data.filter(val => val.points >= period.start && val.points <= period.end).sort((a,b) => b.points - a.points).map((value, index) => (
            <tr className={
                
                user == null ?
                "bg-white"
                :
                value.name === user.displayName ? 
                "bg-light":"bg-white"
                
            }>
              <td>{index + 1}</td>
              <td>
                <img src={value.img} width="75" alt="" className="image" />
              </td>
              <td>
                <h5 className="name text-dark">{value.name}</h5>
              </td>
              <td>
                <h>{value.points}</h>
              </td>
              <td>{value.streak}🔥</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
