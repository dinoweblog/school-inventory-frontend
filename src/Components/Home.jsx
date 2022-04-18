import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../CSS/Home.css";

const Div = styled.div`
  width: 100%;
  height: 600px;
  div {
    width: 30%;
    position: absolute;
    right: 5%;
    top: 35%;
    color: white;
    p {
      color: wheat;
      line-height: 200%;
    }
  }
`;

export const Home = () => {
  return (
    <>
      <Navbar />
      <Div className="home_page">
        <div>
          <h1>School Inventory App</h1>
          <p>
            The school inventory management system works as an asset management
            solution and provides insights on devices that tract teachers
            classes
          </p>
        </div>
      </Div>
    </>
  );
};
