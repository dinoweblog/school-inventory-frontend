import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  loginAuthenticated,
  loginError,
  loginLoading,
  loginSuccess,
} from "../Redux/Login/action";
import { Navbar } from "./Navbar";

const H1 = styled.h1`
  text-align: center;
`;

const Nav = styled.div`
  .nav {
    border-bottom: 1px solid gray;
  }
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
    background-color: #448b44;
    color: white;
    :hover {
      opacity: 0.9;
    }
  }
`;

export const Login = () => {
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const userDetails = {
      email,
      password,
    };

    dispatch(loginLoading());
    fetch(`https://school-inventory-server.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(loginSuccess(res.token));
        if (res.token != undefined) dispatch(loginAuthenticated("true"));
        navigate("/teachers");
      })
      .catch((error) => dispatch(loginError()));
  };

  return (
    <>
      <Nav>
        <Navbar />
      </Nav>
      <H1>Login</H1>

      <Div>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </Div>
    </>
  );
};
