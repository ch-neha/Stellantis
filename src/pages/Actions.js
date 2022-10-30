import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from "react-bootstrap/Toast";
import MyToast from '../components/MyToast';

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
