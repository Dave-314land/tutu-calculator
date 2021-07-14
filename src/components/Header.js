import React from "react";

function Header() {
  return (
    <header>
      <div className="px-4 py-3 my-2 text-center">
        <h1 className="display-5 fw-bold">How many Tutu's are you?</h1>
        <div className="col-lg-12 mx-auto">
          <p className="lead mb-4">
            Enter your weight in pounds (lbs.) to see how many Tutu Atwell's you
            weigh
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
