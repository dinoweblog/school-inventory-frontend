import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import "../CSS/Home.css";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  > div {
    width: 100%;
    border-radius: 10px;
  }
  .text {
    box-sizing: border-box;
    padding: 20px;
  }
  img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .classes > div {
    display: flex;
  }
`;

export const Card = ({ img, classes, name, age, gender }) => {
  return (
    <>
      <Div>
        <div>
          <img src={img} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p className="classes">
            Classes:{" "}
            {classes.map((el) => (
              <div>
                <span>Grade: {el.grade}</span>
                <span>section: {el.section}</span>
                <span>Subject: {el.subject}</span>
              </div>
            ))}
          </p>
        </div>
      </Div>
    </>
  );
};
