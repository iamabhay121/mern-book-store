import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setloading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
      });
  };

  const handleNoClick = () => {
    setloading(true);
    navigate("/");
    setloading(false);
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3x1 my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">
        <h3 className="text-2x1">
          Are you sure you want to delete this book record ?
        </h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
        <button
          className="p-2 bg-sky-600 text-white w-full"
          onClick={handleNoClick}
        >
          No, Go Back
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
