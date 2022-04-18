import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [e, setError] = useState("");

  const Navigate = useNavigate();

  const userDetails = {
    name,
    email,
    password,
    mobile,
    gender,
  };

  const handleSubmit = () => {
    fetch(`https://school-inventory-server.herokuapp.com/register`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      // .then((res) => )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Nav>
        <Navbar />
      </Nav>
      <H1>Register</H1>
      <Div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <button
          onClick={() => {
            handleSubmit();
            Navigate("/login");
          }}
        >
          Submit
        </button>
      </Div>
    </>
  );
};
