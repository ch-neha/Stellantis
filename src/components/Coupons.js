import React  from 'react';
import ScratchCard from 'react-scratchcard-v2';

export default function Coupons({text}) {
  return (
    <div>
      <ScratchCard
        width={400}
        height={250}
        image={require("../assets/scratch_card_background.jpg")}
        finishPercent={20}
        onComplete={() => console.log("complete")}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>{text}</h1>
        </div>
      </ScratchCard>
    </div>
  );
}
