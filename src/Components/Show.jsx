import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getDataAll } from "../Redux/Teachers/action";

export const Home = () => {
  const { token, isAuthenticated } = useSelector((state) => state.login);
  const { restaurant } = useSelector((state) => state.restaurant);

  const dispatch = useDispatch();
  const getData = () => {
    dispatch(getDataAll());
  };

  useEffect(() => {
    getData();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <div>{JSON.stringify(restaurant)}</div>
    </div>
  );
};
