import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 80px;
  gap: 10px;
  justify-content: center;
  button {
    background-color: transparent;
    border: 1px solid green;
    padding: 5px 12px;
    font-weight: bold;
    :hover {
      background-color: green;
      color: white;
    }
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Div className="pagination">
      {pageNumbers.map((number, index) => (
        <div key={index} className="page-item">
          <button onClick={() => paginate(number)} className="page-button">
            {number}
          </button>
        </div>
      ))}
    </Div>
  );
};

export default Pagination;
