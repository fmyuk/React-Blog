import React from "react";
import { SinglePost } from "../../components/singlepost/SinglePost";
import { SideBar } from "../../components/sidebar/SideBar";
import "./single.css";

export const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};