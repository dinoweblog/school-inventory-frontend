import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 10%;
  box-sizing: border-box;

  .logo {
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .buttons {
    display: flex;
    gap: 30px;
  }
  button {
    background-color: transparent;
    cursor: pointer;
    border: 1px dashed green;
    border-radius: 5px;
    font-size: 18px;
    padding: 6px 10px;
  }
`;
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Div className="nav">
      <div className="logo">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          School App
        </button>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Signup
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </Div>
  );
};
