import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">Powered By Piland&copy; {year} </span>
        <span className="text-muted">
          {" "}
          | Inspired by{" "}
          <a href="https://www.thefantasyfootballers.com/" target="_">
            The Fantasy Footballers Podcast
          </a>{" "}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
