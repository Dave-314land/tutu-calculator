import React, { useState } from "react";

function WeightCalculator() {
  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <form>
          <input
            type="range"
            className="form-range"
            min="0"
            max="400"
            step="0.5"
            id="user-weight-range"
          />
          <button type="submit" className="btn btn-primary btn-lg px-4 gap-3">
            Calculate Tutu's
          </button>
        </form>
      </div>
    </div>
  );
}

export default WeightCalculator;
