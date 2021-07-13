import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
          Convert to Tutu's
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
