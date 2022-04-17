import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;
const Div = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #e9e9e9;
  box-sizing: border-box;
  padding: 2%;
  border-radius: 8px;
  margin-top: 30px;
  input {
    height: 33px;
    padding-left: 15px;
    outline: none;
  }
  button {
    height: 38px;
    border: none;
    background-color: tomato;
    color: white;
    :hover {
      opacity: 0.9;
    }
  }
`;

export const Register = () => {
  return (
    <Div>
      <input type="email" />
      <input type="password" />

      <button onClick={() => {}}>Signup</button>
    </Div>
  );
};
