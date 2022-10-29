import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Progress() {
  const data = {
    title: "Complete first goal",
    description:
      "Travel 10km with in 24 hours and unlock your first achievement",
    actual: 100,
    current: 60,
    type: "group",
  };
  return (
    <div
      style={{ width: "30rem", minHeight: "10rem" }}
      className="shadow m-3 p-3"
    >
      <div className="row">
        <div className="col-4">
          <img
            src={
              data.type === "safety"
                ? "https://cdn-icons-png.flaticon.com/512/2345/2345470.png"
                : data.type === "group"
                ? "https://cdn-icons-png.flaticon.com/512/476/476863.png"
                : "https://cdn-icons-png.flaticon.com/512/7246/7246748.png"
            }
            alt="imag"
            height="100%"
            width="100%"
          />
        </div>
        <div className="col-8">
          <div className="fw-bold">{data.title}</div>
          <div className="my-3">{data.description}</div>
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ width: "75%" }}>
              <ProgressBar
                variant={
                  data.type === "safety"
                    ? "success"
                    : data.type === "group"
                    ? "warning"
                    : "primary"
                }
                now={Math.ceil((data.current * 100) / data.actual)}
              />
            </div>
            <div>
              {data.current} / {data.actual}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
