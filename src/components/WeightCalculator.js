import React, { useState } from "react";

function WeightCalculator() {
  const [weight, setWeight] = useState(0);

  const calculateTutu = () => {
    const tutuWeight = 165;
    const numberOfTutus = weight / tutuWeight;
    const numberOfTutusRounded =
      Math.round((numberOfTutus + Number.EPSILON) * 100) / 100;
    console.log(numberOfTutusRounded);
    return numberOfTutusRounded;
  };

  const convertTutu = (e) => {
    calculateTutu();

    e.preventDefault();
  };

  return (
    <div className="container-fluid bg-body">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <p className="fs-2">{weight} lbs</p>
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
      </div>
    </div>
  );
}

export default WeightCalculator;
