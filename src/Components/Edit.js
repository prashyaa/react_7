import React, { useContext } from "react";
import { store } from "./Detail";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Style.css";
const Edit = () => {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [course, setCourse] = useState("");

  const [batch, setBatch] = useState("");

  const { id } = useParams();

  const [students, setStudents] = useContext(store);

  const ChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const ChangeHandlerAge = (e) => {
    setAge(e.target.value);
  };
  const ChangeHandlerCourse = (e) => {
    setCourse(e.target.value);
  };
  const ChangeHandlerStudent = (e) => {
    setBatch(e.target.value);
  };
  useEffect(() => {
    students.forEach((element) => {
      if (element.id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
      }
    });
  }, [id, students]);

  const SubmitHandler = () => {
    setStudents((previousV) =>
      previousV.map((store) =>
        store.id === id
          ? {
              id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
            }
          : store
      )
    );
  };
  return (
    <div>
      <div className="addbox">
        <label className="input">Name:</label>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={ChangeHandlerName}
        />
        <label className="input">Age:</label>
        <input
          className="input"
          id="age"
          type="text"
          name="age"
          value={age}
          onChange={ChangeHandlerAge}
        />
        <br />
        <br />
        <label className="input">Course:</label>
        <input
          className="input"
          id="course"
          type="text"
          name="course"
          placeholder="Course"
          value={course}
          onChange={ChangeHandlerCourse}
        />
        <label className="input">Batch:</label>
        <input
          className="input"
          id="batch"
          type="text"
          name="batch"
          placeholder="Batch"
          value={batch}
          onChange={ChangeHandlerStudent}
        />
      </div>

      <div className="button">
        <Link className="cancel" to="/student">
          Cancel
        </Link>
        <Link className="submit" to="/student" onClick={SubmitHandler}>
          Update
        </Link>
      </div>
    </div>
  );
};

export default Edit;