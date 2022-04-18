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
  h3 {
    margin: 0;
    padding: 0;
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
  .classes {
    span {
      font-size: 18px;
    }
    table {
      padding-left: 30px;
      text-align: center;
      td {
        padding: 0 10px;
      }
    }
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
            <span>Classes :</span>
            <table>
              <tr>
                <td>Grade</td>
                <td>Section</td>
                <td>Subject</td>
              </tr>
              {classes.map((el) => (
                <tr>
                  <td>{el.grade}</td>
                  <td>{el.section}</td>
                  <td>{el.subject}</td>
                </tr>
              ))}
            </table>
          </p>
        </div>
      </Div>
    </>
  );
};
