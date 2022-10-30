import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";


export default function Actions() {
    const [showToast1, setShowToast1] = useState(false)
    const [showToast2, setShowToast2] = useState(false)

    const addPoints = () => {
        setShowToast1(true)
    }

    const substractPoints = () => {
        setShowToast2(true)
    }
  return (
    
    <div>

        <Toast onClose={() => setShowToast1(false)} show={showToast1} delay={2000} autohide>
          
          <Toast.Header>
          <img display='rounded me-2' src={require('../assets/gold-coin.gif')} width="80px" height="40px"></img>
            <strong className="me-auto">Points Added</strong>
            <strong>+50</strong>
          </Toast.Header>
          <Toast.Body>Woohoo, you're rewarded for being a great driver!</Toast.Body>
        </Toast>

        <Toast onClose={() => setShowToast2(false)} show={showToast2} delay={2000} autohide>
          
          <Toast.Header>
          <img display='rounded me-2' src={require('../assets/ohno.png')} width="80px" height="40px"></img>
            <strong className="me-auto">Points Deducted</strong>
            <strong>-20</strong>
          </Toast.Header>
          <Toast.Body>Oh no, you have a penalty for bad driving.!</Toast.Body>
        </Toast>

        <div className="container my-5">
            <div className="row">
            {/* <div className="col-3"></div> */}
            <div className="d-grid gap-2 col-3 mx-auto">
                <Button onClick={addPoints} variant="primary" className='m-2' style={{width: '600'}}>Safe Driving for a week</Button>
            </div>
            <div className="d-grid gap-2 col-3 mx-auto">
                <Button onClick={substractPoints} variant="primary" className='m-2' style={{width: '600'}}>Cross a red light</Button>
            </div>
            </div>
            <div className="row">
            {/* <div className="col-3"></div> */}
            <div className="d-grid gap-2 col-3 mx-auto">
            <Button onClick={addPoints} variant="primary" className='m-2' style={{width: '600'}}>Regular maintenance</Button>
            </div>
            <div className="d-grid gap-2 col-3 mx-auto">
            <Button onClick={substractPoints} variant="primary" className='m-2'>Sudden Acceleration</Button>
            </div>
            </div>
            <div className="row">
            {/* <div className="col-3"></div> */}
            <div className="d-grid gap-2 col-3 mx-auto">
            <Button onClick={addPoints} variant="primary" className='m-2'>Wears seatbelt</Button>
            </div>
            <div className="d-grid gap-2 col-3 mx-auto">
            <Button onClick={substractPoints} variant="primary" className='m-2'>Crossing speed limit</Button>
            </div>
            </div>
        </div>
    </div>
  )
}
