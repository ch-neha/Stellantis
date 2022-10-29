import React, { useRef }  from 'react';
import ScratchCard from 'react-scratchcard-v2';

export default function Coupons() {

  return (
    <div>
      <ScratchCard
        width={500}
        height={300}
        image={require('../assets/scratch_card_background.jpg')}
        finishPercent={20}
        onComplete={() => console.log("complete")}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1>40% off on Dominos 🍕</h1>
        </div>
      </ScratchCard>
    </div>
  )
}
