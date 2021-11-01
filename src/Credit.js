import React from "react";
import "./Credit.css";

function Credit() {
  return (
    <p className="Credit">
      <a
        href="https://github.com/betty2002o/weather-app-react"
        className="GithubLink"
        target="_blank"
        rel="noreferrer"
      >
        Open-sourced on Github
      </a>
      &nbsp;by Betty Chiang
    </p>
  );
}

export default Credit;
