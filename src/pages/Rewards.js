import React from 'react'
import Coupons from '../components/Coupons'
import UsedCoupon from '../components/UsedCoupon'

export default function Rewards() {
  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col-3 m-5">
                    <Coupons text="40% off on Dominos 🍕"/>
                </div>
                <div className="col-3 m-5">
                    <Coupons text="3 Free Live Classes for BYJUS"/>
                </div>
                <div className="col-3 m-5">
                    <UsedCoupon title="60% off" body = "upto Rs.120 from Zomato" imgsrc = {require("../assets/Zomato-logo.png")}/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 m-5">
                    <UsedCoupon title="10% Cash Back" body = "with an upper cap of Rs. 50/- per transaction." imgsrc = {require("../assets/Indian-Oil.png")}/>
                </div>
                <div className="col-3 m-5">
                    <UsedCoupon title="Rs.100 Off" body = "for a minimum order value of Rs.599 on KFC." imgsrc = {require("../assets/kfc.png")}/>
                </div>
                <div className="col-3 m-5">
                    <UsedCoupon title="3 Month Free" body = "Audible Membership voucher expired on Dec 30th, 2022." imgsrc = {require("../assets/audible.png")}/>
                </div>
            </div>
        </div>
    </div>
  )
}
