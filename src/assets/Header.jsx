import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.jpg";
import NavBarLinks from "./Nav.jsx";
import "./sass/style.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewEntry from "./NewEntry.jsx";
import OldData from "./Olddata";

const popover = (
  <Popover id="popover-basic">
    <button className="profile-btn">My Profile</button>
    <br></br>
    <button className="profile-btn">Log Out</button>
  </Popover>
);

function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <img className="logo" src={logo} alt="" />
          <h3>Shree Ram Infotech</h3>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div>
              <Button variant="outline-success">Search</Button>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <svg
                  className="btn-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </OverlayTrigger>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="home-btn">
        <BrowserRouter>
          <NavBarLinks />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/newentry" element={<NewEntry />} />
            <Route path="/olddata" element={<h1>Old Data</h1>} />
            <Route
              path="/complainmessage"
              element={<h1>Complain Meassage</h1>}
            />
            <Route path="/jobservices" element={<h1>Job And Services</h1>} />
            <Route
              path="/servicecenter"
              element={<h1>Received from Services Center</h1>}
            />
            <Route
              path="/pendingdelivery"
              element={<h1>Pending Delivery</h1>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Header;
