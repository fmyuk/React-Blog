import React from "react";
import "./header.css";

export const Header = () => {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Fumi の Tech ブログ</span>
      </div>
      <img
        className="headerImg"
        src={PF + "1656466933333IMG_0675.JPG"}
        alt=""
      />
    </div>
  );
};