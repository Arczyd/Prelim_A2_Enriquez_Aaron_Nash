import React from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100 w-100 bg-light text-center"
      style={{ background: "linear-gradient(135deg, #E5E6E4, #F9F9F8)" }}
    >
      <h1 className="fw-bold mb-3 display-3">WELCOME TO AST</h1>
      <p className="lead">
        AST is to put smiles on the faces of everyone we touch.
        <br />
        We do so by creating new surprises for people across the world to enjoy
        together.
      </p>
      <button
        type="button" // Ensure the button type is set to "button"
        className="btn btn-primary mt-3 rounded-pill px-5 py-3 shadow-lg fs-4"
        onClick={() => navigate("/login")} // Use navigate to go to the login page
      >
        CONTINUE
      </button>
    </div>
  );
}
