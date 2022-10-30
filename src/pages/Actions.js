import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { auth } from "../services/auth";
import { getUserbyId, updateUser } from "../services/user";
import { useAuthState } from "react-firebase-hooks/auth";
import MyToast from '../components/MyToast';

export default function Actions() {
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [user] = useAuthState(auth);

  const addPoints = async () => {
    const user_data = await getUserbyId(user.uid);
    updateUser(user.uid, {
      points: user_data.points ? user_data.points + 50 : 50,
    });
    setShowToast1(true);
  };

  const substractPoints = async () => {
    const user_data = await getUserbyId(user.uid);
    console.log(user_data);
    updateUser(user.uid, {
      points: user_data.points
        ? user_data.points - 20 > 0
          ? user_data.points - 20
          : 0
        : 0,
    });
    setShowToast2(true);
  };
  return (
    <div>
      <Toast
        onClose={() => setShowToast1(false)}
        show={showToast1}
        delay={2000}
        autohide
      >
        <Toast.Header>
          <img
            display="rounded me-2"
            alt="img"
            src={require("../assets/gold-coin.gif")}
            width="80px"
            height="40px"
          ></img>
          <strong className="me-auto">Points Added</strong>
          <strong>+50</strong>
        </Toast.Header>
        <Toast.Body>
          Woohoo, you're rewarded for being a great driver!
        </Toast.Body>
      </Toast>

        <MyToast 
          showToast={showToast1} 
          setShowToast={setShowToast1} 
          imgurl={'../assets/gold-coin.gif'} 
          head1={'Points Added'}
          head2={'+50'}
          body={"Woohoo, you're rewarded for being a great driver!"}
        />

        <MyToast 
          showToast={showToast2} 
          setShowToast={setShowToast2} 
          imgurl={'../assets/ohno.png'} 
          head1={'Points Deducted'}
          head2={'-20'}
          body={"Oh no, you have a penalty for bad driving.!"}
        />

      <div className="container my-5">
        <div className="row">
          {/* <div className="col-3"></div> */}
          <div className="d-grid gap-2 col-3 mx-auto">
            <Button
              onClick={addPoints}
              variant="primary"
              className="m-2"
              style={{ width: "600" }}
            >
              Safe Driving for a week
            </Button>
          </div>
          <div className="d-grid gap-2 col-3 mx-auto">
            <Button
              onClick={substractPoints}
              variant="primary"
              className="m-2"
              style={{ width: "600" }}
            >
              Cross a red light
            </Button>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-3"></div> */}
          <div className="d-grid gap-2 col-3 mx-auto">
            <Button
              onClick={addPoints}
              variant="primary"
              className="m-2"
              style={{ width: "600" }}
            >
              Regular maintenance
            </Button>
          </div>
          <div className="d-grid gap-2 col-3 mx-auto">
            <Button onClick={substractPoints} variant="primary" className="m-2">
              Sudden Acceleration
            </Button>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-3"></div> */}
          <div className="d-grid gap-2 col-3 mx-auto">
            <Button onClick={addPoints} variant="primary" className="m-2">
              Wears seatbelt
            </Button>
          </div>
          <div className="d-grid gap-2 col-3 mx-auto">
            <Button onClick={substractPoints} variant="primary" className="m-2">
              Crossing speed limit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
