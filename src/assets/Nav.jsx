import React from "react";
import { Link } from "react-router-dom";
import "./sass/style.scss";
import "./sass/style.css";

export default function NavBarLinks() {
  return (
    <div>
      <ul className="nav-ul">
        <button className="product-btn">
          <Link className="nav-link navbtn" to="/">
            Home
          </Link>
        </button>
        <button className="product-btn">
          <Link className="nav-link" to="/newentry">
            New Entry
          </Link>
        </button>
        <button className="product-btn">
          <Link className="nav-link" to="/olddata">
            Old Data
          </Link>
        </button>
        <button className="product-btn">
          <Link className="nav-link" to="/complainmessage">
            Complain Message
          </Link>
        </button>
        <button className="product-btn">
          <Link className="nav-link" to="/jObservices">
            Job & Services{" "}
          </Link>
        </button>
        <button className="product-btn">
          <Link className="nav-link" to="/servicecenter">
            Received from Services Center
          </Link>
        </button>
        <button className="product-btn">
          <Link className="nav-link" to="/pendingdelivery">
            Pending Delivery
          </Link>
        </button>
      </ul>
    </div>
  );
}
