import React, { useState } from "react";
import tutuFull from "../img/Tutu-Atwell.png";

function WeightCalculator() {
  const [weight, setWeight] = useState(165);
  const [userTutuWeight, setUserTutuWeight] = useState(0);
  const [showTutus, setShowTutus] = useState(false);

  const calculateTutu = () => {
    const tutuWeight = 165;
    const numberOfTutus = weight / tutuWeight;
    setUserTutuWeight(Math.round((numberOfTutus + Number.EPSILON) * 100) / 100);
  };

  const convertTutu = (e) => {
    calculateTutu();
    setShowTutus(true);
    e.preventDefault();
  };

  const reset = () => {
    setShowTutus(false);
    setWeight(165);
    setUserTutuWeight(0);
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
          <div
            className="d-grid
                        gap-3
                        d-lg-flex
                        justify-content-md-center
                        my-3"
          >
            <button
              type="button"
              onClick={convertTutu}
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Calculate Tutu's
            </button>
            <button
              type="button"
              onClick={reset}
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Reset
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
