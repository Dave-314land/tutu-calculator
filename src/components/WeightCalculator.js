import React, { useState } from "react";
import tutuFull from "../img/Tutu-Atwell-Full.png";

function WeightCalculator() {
  const [weight, setWeight] = useState(0);
  const [userTutuWeight, setUserTutuWeight] = useState(0);
  const [showTutus, setShowTutus] = useState(false);

  const calculateTutu = () => {
    const tutuWeight = 165;
    const numberOfTutus = weight / tutuWeight;
    setUserTutuWeight(Math.round((numberOfTutus + Number.EPSILON) * 100) / 100);
  };

  const convertTutu = (e) => {
    calculateTutu();
    setShowTutus(!showTutus);

    if (userTutuWeight < 1) {
      console.log("first");
    } else if (userTutuWeight > 1) {
      console.log("second");
    } else {
      console.log("does not compute");
    }
    e.preventDefault();
  };

  return (
    <div className="container-fluid bg-body">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <p className="fs-1">{weight} lbs</p>
      </div>
      <div className="my-3 px-5">
        <form>
          <div className="mb-3">
            <input
              type="range"
              className="form-range"
              min="0"
              max="400"
              step="1"
              id="user-weight-range"
              value={weight}
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <button
              type="button"
              onClick={convertTutu}
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Calculate Tutu's
            </button>
          </div>
        </form>
        {showTutus ? (
          <p className="fs-1">
            {" "}
            You weigh {userTutuWeight} Tutu Atwell's
            <img src={tutuFull} alt="Tutu Atwell" />
          </p>
        ) : (
          <img src={tutuFull} alt="Tutu Atwell" />
        )}
      </div>
    </div>
  );
}

export default WeightCalculator;
