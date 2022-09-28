import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./sass/style.css";
import "./sass/style.scss";
import Button from "react-bootstrap/esm/Button";
import OldData from "./Olddata";
import { useEffect } from "react";

export default function NewEntry() {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [adress, setAddress] = useState("");
  const [product, setProduct] = useState("");
  const [company, setCompany] = useState("");
  const [problem, setProblem] = useState("");
  const [estimate, setEstimate] = useState("");
  const [date, setDate] = useState("");
  const [productStatus, setProductstatus] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [data, setData] = useState([]);
  // const [tableData, setTableData] = useState([]);
  // const [formInputData, setformInputData] =useState()

//   const handleChange = (event) => {
//      const newInput = (data)=>({...data,[event.target.name]: event.target.value})
//      setformInputData(newInput)
//   }

//   const handleSubmit= (evnt) =>{
//     evnt.preventDefault();
//     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
//     if(checkEmptyInput)
//     {
//      const newData = (data)=>([...data, formInputData])
//      setTableData(newData);
//      const emptyInput= { mobile:  '',
//       name:  '',
//       adress:  '',
//       product:  '',
//       company:  '',
//       problem:  '',
//       estimate:  '',
//       date:  '',
//       productStatus:  '',
//       deliveryStatus:  '',}
//      setformInputData(emptyInput)
//     }
// }  

  const alldata = {
    mobile,
    name,
    adress,
    product,
    company,
    problem,
    estimate,
    date,
    productStatus,
    deliveryStatus,
  };

  const handle = (e) => {
    e.preventDefault();
    // console.log(alldata)
    // console.log("alldata", alldata);
    const tempdata = [alldata, ...data];
    setData(tempdata);
    
  };
  useEffect(()=>{
  localStorage.setItem("AllData", JSON.stringify([data]));

},[data])
  return (
    <div className="form-container">
      <h1>New Entry </h1>
      <div className="form-section">
        <Row className=" form-input">
          <Col>
            <label>Mobile NO.</label>
          </Col>
          <Col>
            <input
             value={ mobile}
              placeholder="Enter Mobile Number "
              onChange={(event)=> setMobile(event.target.value)}
            />
          </Col>
          <Col>
            <label className="date-label">Date</label>
          </Col>
          <Col>
            <input
            type="date"
             value={date}
              placeholder="Enter Date"
              onChange={(event)=> setDate(event.target.value)}
            />
          </Col>
        </Row>
        <Row className=" form-input">
          <Col>
            <label>Username</label>
          </Col>
          <Col>
            <input
             value={  name}
              placeholder="Enter username"
               onChange={(event)=> setName(event.target.value)}
            />
          </Col>
          <Col>
            <label>Adress</label>
          </Col>
          <Col>
            <input
             value={  adress}
              placeholder="Enter Adress"
               onChange={(event)=> setAddress(event.target.value)}
            />
          </Col>
        </Row>
        <Row className=" form-input">
          <Col>
            <label>Product</label>
          </Col>
          <Col>
            <input
             value={  product}
              placeholder="Enter Product Name"
               onChange={(event)=> setProduct(event.target.value)}
            />
          </Col>
          <Col>
            <label>Company</label>
          </Col>
          <Col>
            <input
             value={  company}
              placeholder="Enter Company Name"
               onChange={(event)=> setCompany(event.target.value)}
            />
          </Col>
        </Row>
        <Row className=" form-input">
          <Col>
            <label>Estimate Price</label>
          </Col>
          <Col>
            <input
             value={  estimate}
              placeholder="Enter Estimate Price"
               onChange={(event)=> setEstimate(event.target.value)}
            />
          </Col>
          <Col>
            <label>Problem</label>
          </Col>
          <Col>
            <input
             value={  problem}
              placeholder="Enter Device Problem"
               onChange={(event)=> setProblem(event.target.value)}
            />
          </Col>
        </Row>
        <Row className=" form-input">
          <Col>
            <label>Product Status</label>
          </Col>
          <Col>
            <input
             value={ productStatus}
              placeholder="Enter Product Status"
               onChange={(event)=> setProductstatus(event.target.value)}
            />
          </Col>
          <Col>
            <label>Delivery Status</label>
          </Col>
          <Col>
            <input
             value={ deliveryStatus}
              placeholder="Enter Delivery Status"
               onChange={(event)=> setDeliveryStatus(event.target.value)}
            />
          </Col>
        </Row>
        <Row className=" form-input"></Row>
        <Button className="input-btn" type="reset">
          Cancel
        </Button>
        <Button onClick={handle} className="input-btn" type="submit">
          Submit
        </Button>
      </div>
      <OldData tableData={data}/>
    </div>
  );
}
