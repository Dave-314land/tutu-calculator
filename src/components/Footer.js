import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Powered By Piland&copy; {year}</span>
      </div>
    </footer>
  );
}

export default Footer;
