import React from 'react'
import Card from 'react-bootstrap/Card';

export default function UsedCoupon({title, body, imgsrc}) {
    // const title = "60% Off"
    // const body = "upto Rs.120 from Zomato"
    // const imgsrc = require("../assets/Zomato-logo.png")

    const variant = 'light';
  return (
    <div>
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '400px', height: '250px'}}
          className="mb-2"
        >
          <Card.Header>Redeemed</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={imgsrc} height={'100'} className='my-2'/>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {body}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}
