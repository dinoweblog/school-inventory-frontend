import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDataAll } from "../Redux/Teachers/action";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import Pagination from "./Pagination";
// import { Modal } from "./Model";

const MainDiv = styled.div`
  width: 80%;
  margin: auto;

  .filterSection {
    display: flex;
    gap: 30px;
    margin-top: 20px;
    margin-bottom: 50px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 10px;
  }
  .btn {
    height: 38px;
    border: none;
    background-color: tomato;
    color: white;
    :hover {
      opacity: 0.9;
    }
  }

  .card {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: space-between;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  padding: 4px;
  border-radius: 4px;
  border: 1px dashed green;
  color: black;
  background-color: white;
  font-size: 15px;
  cursor: pointer;
`;
const Table = styled.div`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
  td,
  th {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 8px 18px;
    width: 100%;
  }
`;
export const TeacherDetails = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const navigate = useNavigate();
  const [sort, setSort] = useState(true);
  const [Gender, setGender] = useState("male");
  const [teachersData, setTeachersData] = useState([]);
  const [teacherName, setTeacherName] = useState("");

  let { teachers } = useSelector((state) => state.teachers);

  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getDataAll());
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const getFilterData = () => {
  //     setTeachersData([...teachers]);
  //   };

  const searchData = () => {
    fetch(
      `https://school-inventory-server.herokuapp.com/teachers/search/${teacherName}`
    ).then((res) => res.json());
  };

  console.log("teachersData", teachersData);
  console.log("teachers", teachers);

  const filterByGender = () => {
    Gender === "male" ? setGender("female") : setGender("male");

    teachers = teachers.filter(function (e) {
      return Gender === e.gender.toLowerCase();
    });
  };

  const sortByAge = () => {
    // Gender === "male" ? setGender("female") : setGender("male");

    teachers = teachers.sort(function (a, b) {
      return b.age - a.age;
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = teachers.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainDiv>
      <Navbar />
      <div className="filterSection">
        <button
          className="btn"
          onClick={() => {
            filterByGender();
          }}
        >
          filter by gender
        </button>
        <button
          className="btn"
          onClick={() => {
            sortByAge();
          }}
        >
          sort by age
        </button>
        <input
          type="text"
          value={teacherName}
          onChange={(e) => {
            setTeacherName(e.target.value);
          }}
        />
      </div>
      <div className="card">
        {currentPosts.map((e) => (
          <Card
            key={e.id}
            img={e.image_urls}
            name={e.name}
            age={e.age}
            gender={e.gender}
            classes={e.classes}
          />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={teachers.length}
        paginate={paginate}
      />
    </MainDiv>
  );
};
