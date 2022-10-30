import React from 'react'
import Toast from "react-bootstrap/Toast";

export default function MyToast({showToast, setShowToast, imgurl, head1, head2, body}) {
  return (
    <div>
         <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
            <Toast.Header>
            <img display='rounded me-2' src={(head2 === "+50")?require("../assets/gold-coin.gif"):require("../assets/ohno.png")} width="80px" height="40px"></img>
                <strong className="me-auto">{head1}</strong>
                <strong>{head2}</strong>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
        </Toast>
    </div>
  )
}
