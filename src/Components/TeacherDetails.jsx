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
    background-color: transparent;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
    color: black;
    :hover {
      border-color: green;
    }
  }
  .searchBtn {
    margin-left: -25px;
  }
  input {
    width: 250px;
  }
  .card {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: space-between;
  }
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
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const [sort, setSort] = useState(true);
  const [Gender, setGender] = useState("male");
  const [check, setCheck] = useState("true");
  let [teachersData, setTeachersData] = useState([]);
  const [teacherName, setTeacherName] = useState("");
  let filterData = [];

  const { teachers } = useSelector((state) => state.teachers);

  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getDataAll());
  };

  useEffect(() => {
    setTeachersData([...teachers]);
    fetchData();
  }, []);

  useEffect(() => {
    reRender();
  }, [count]);

  //   const getFilterData = () => {
  //     setTeachersData([...teachers]);
  //   };

  const searchData = () => {
    fetch(
      `https://school-inventory-server.herokuapp.com/teachers/search/${teacherName}`
    )
      .then((res) => res.json())
      .then((res) => {
        setTeachersData([...res]);
      })
      .catch((error) => {
        setTeachersData([...teachers]);
      });
  };

  const filterByGender = () => {
    Gender === "male" ? setGender("female") : setGender("male");

    setTeachersData([
      ...teachers.filter((e) => Gender == e.gender.toLowerCase()),
    ]);
  };

  const sortByAge = () => {
    check === "true" ? setCheck("false") : setCheck("true");

    if (check === "true") {
      teachersData = teachersData.sort(function (a, b) {
        return a.age - b.age;
      });
    } else {
      teachersData = teachersData.sort(function (a, b) {
        return b.age - a.age;
      });
    }
  };
  let currentPosts;
  let indexOfFirstPost;
  let indexOfLastPost;
  let paginate;
  const reRender = () => {
    indexOfLastPost = currentPage * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentPosts = teachersData.slice(indexOfFirstPost, indexOfLastPost);
    paginate = (pageNumber) => setCurrentPage(pageNumber);
  };
  indexOfLastPost = currentPage * postsPerPage;
  indexOfFirstPost = indexOfLastPost - postsPerPage;
  currentPosts = teachersData.slice(indexOfFirstPost, indexOfLastPost);
  paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(filterData);

  return (
    <MainDiv>
      <Navbar />
      <div className="filterSection">
        <button
          className="btn"
          onClick={() => {
            filterByGender();
            setCount(1);
          }}
        >
          filter by gender
        </button>
        <button
          className="btn"
          onClick={() => {
            sortByAge();
            setCount(2);
          }}
        >
          sort by age
        </button>
        <input
          type="text"
          placeholder="Search"
          value={teacherName}
          onChange={(e) => {
            setTeacherName(e.target.value);
          }}
        />
        <button
          className="btn searchBtn"
          onClick={() => {
            searchData();
            setCount(3);
          }}
        >
          Click
        </button>
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
