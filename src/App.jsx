import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { TeacherDetails } from "./Components/TeacherDetails";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route
          path="/teachers"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <TeacherDetails />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
