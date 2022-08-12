// import React, { useState, useEffect } from "react";
// import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";

import "./signup.css";

const Signup = () => {
  // const [value, setValue] = useState("");
  // const [values, setValues] = useState("");

  // // const countrybaseurl = "https://restcountries.com/v3.1/all";
  // console.log(values);
  // // const country = () => {
  // //   axios
  // //     .get(countrybaseurl)
  // //     .then((response) => {
  // //       const getData = response.data;
  // //       // console.log(getData);
  // //       setValue(getData.country_name);
  // //     })
  // //     .catch(function (error) {
  // //       console.log(error);
  // //     });
  // // };
  // useEffect(() => {
  //   const fetchCountry = async () => {
  //     const res = await fetch("https://raw.githubusercontent.com/AnilNITT/All-State-City-of-INDIA/master/All_Country.json");
  //     // const data = await res.json();
  //     const data=res;
  //     setValues(data);
  //     console.log(typeof res);
  //     console.log(res);
  //     // console.log(data);
  //   };
  //   fetchCountry();
  // }, []);

  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-6 mx-auto bd">
          <div className="text-center pt-5 pb-3">
            <h2>SIGN UP!</h2>
          </div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Row>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Code + Place" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Control placeholder="Street + No" />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Select defaultValue={"values"}>
                {/* <option>Geremany</option> */}
                {/* {values.map((datas) => {
                  return <option>{datas}</option>;
                })} */}
              </Form.Select>
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Birthday" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                {/* <p className="stat">status</p> */}
                <Form.Control type="text" placeholder="TL" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" as={Col} controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>Vaccinated</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridState">
              {/* <p>Corona - Accepted</p> */}
              <Form.Label>Corona - Accepted</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>No MORE</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridState">
              {/* <p>DBS Protokoll</p> */}
              <Form.Label>DBS Protokoll</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>No</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridState">
              {/* <p>Corona - Accepted</p> */}
              <Form.Label>Corona - Accepted</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>No MORE</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                {/* <p className="stat">Points</p> */}
                <Form.Label>Points</Form.Label>
                <Form.Control type="text" placeholder="0" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                {/* <p className="stat">status</p> */}
                <Form.Label>status</Form.Label>
                <Form.Control type="text" placeholder="E- Status" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Select defaultValue="Choose...">
                  <option>Contact</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Datenschutz akzeptiert" />
            </Form.Group>

            <div className="text-center pt-2">
              <Buttons
                onClick={() => {
                  handleClick();
                }}
                value={"Sign Up"}
              />
            </div>
          </Form>
          <div className="text-center pt-4">
            <p>
              Already have an account?
              <Link to="" className="tpclr">
                {" "}
                Sign IN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
