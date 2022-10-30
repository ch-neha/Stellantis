import React, { useState } from "react";
import "./style.css";

export default function LeaderBoard() {
  const [data, setData] = useState([
    {
      name: "Hanna",
      location: "India",
      score: 550,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      dt: "2022-06-1",
      streak: 10,
      level: "Rookie",
    },
    {
      name: "Shawn Mendes",
      location: "India",
      score: 440,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      dt: "2022-05-29",
      streak: 7,
      level: "Social Leader",
    },
    {
      name: "Camila",
      location: "India",
      score: 350,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      dt: "2022-05-30",
      streak: 2,
      level: "The Wise",
    },
    {
      name: "Shawn Hanna",
      location: "India",
      score: 225,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      dt: "2022-02-10",
      streak: 6,
      level: "The Wise",
    },
    {
      name: "Fidel Hand",
      location: "USA",
      score: 100,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      dt: "2021-01-01",
      streak: 1,
      level: "Social Servent",
    },
  ]);

  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setData([
      {
        name: "Hanna",
        location: "India",
        score: 550,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-06-1",
        streak: 10,
        level: "Rookie",
      },
      {
        name: "Shawn Mendes",
        location: "India",
        score: 440,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-05-29",
        streak: 7,
        level: "Social Leader",
      },
      {
        name: "Camila",
        location: "India",
        score: 350,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-05-30",
        streak: 2,
        level: "The Wise",
      },
      {
        name: "Shawn Hanna",
        location: "India",
        score: 225,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-02-10",
        streak: 6,
        level: "The Wise",
      },
      {
        name: "Fidel Hand",
        location: "USA",
        score: 100,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2021-01-01",
        streak: 1,
        level: "Social Servent",
      },
    ]);
  };

  const handleClick2 = (e) => {
    setData([
      {
        name: "Bessie Hickle",
        location: "China",
        score: 1350,
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2021-08-17",
        streak: 10,
        level: "Social Servent",
      },
      {
        name: "Adella Wunsch",
        location: "Japan",
        score: 1100,
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2021-10-23",
        streak: 10,
        level: "Social Servent",
      },
      {
        name: "Clair O'Connell",
        location: "London",
        score: 1050,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-01-22",
        streak: 10,
        level: "The Wise",
      },
      {
        name: "Kameron Prosacco",
        location: "Canada",
        score: 750,
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-01-21",
        level: "The Wise",
        streak: 10,
      },
    ]);
  };

  const handleClick3 = (e) => {
    setData([
      {
        name: "Fidel Hand",
        location: "China",
        score: 3350,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2021-08-17",
        streak: 10,
        level: "Social Servent",
      },
      {
        name: "Adella Wunsch",
        location: "Japan",
        score: 2100,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2021-10-23",
        streak: 10,
        level: "Social Servent",
      },
      {
        name: "Clair O'Connell",
        location: "London",
        score: 1950,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-01-22",
        streak: 10,
        level: "The Wise",
      },
      {
        name: "Kameron Prosacco",
        location: "Canada",
        score: 1750,
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        dt: "2022-01-21",
        level: "The Wise",
        streak: 10,
      },
    ]);
  };

  return (
    <div
      className="container"
      style={{ width: "50%", justifyContent: "center" }}
    >
      <h1 className="text-primary mt-5 text-center">Leaderboard</h1>

      <div className="duration d-flex justify-content-center">
        <button type="button" class="btn btn-danger m-1" onClick={handleClick}>
          League 1
        </button>
        <button type="button" class="btn btn-danger m-1" onClick={handleClick2}>
          League 2
        </button>
        <button type="button" class="btn btn-danger m-1" onClick={handleClick3}>
          League 3
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
          {data.map((value, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <img src={value.img} width="75" alt="" className="image" />
              </td>
              <td>
                <h5 className="name text-dark">{value.name}</h5>
              </td>
              <td>
                <h>{value.score}</h>
              </td>
              <td>{value.streak}🔥</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
