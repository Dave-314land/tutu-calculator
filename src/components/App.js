import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import WeightCalculator from "./WeightCalculator";

function App() {
  return (
    <div className="App">
      <Header />
      <WeightCalculator />
      <Footer />
    </div>
  );
}

export default App;
