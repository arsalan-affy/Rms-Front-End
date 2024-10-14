import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Mail, Lock, User } from "lucide-react";
import image from "../assets/bg-auth.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column position-relative text-white bg-signup">
      <img
        src={image}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <Navbar
        expand="lg"
        className="w-100 top-0 position-absolute pt-md-5 pt-sm-2"
      >
        <Container>
          <Link className="text-decoration-none text-white fs-2">Logo</Link>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col
            md={7}
            className="d-flex justify-content-center align-items-center"
          ></Col>
          <Col
            md={4}
            style={{ zIndex: "100" }}
            className="d-flex align-items-center justify-content-center flex-column "
          >
            <h2 className="mb-4 text-center">Create your account</h2>
            <Form className="w-100 w-md-75 ">
              <InputGroup className="mb-3 mt-3 py-2 input-group">
                <InputGroup.Text className="bg-transparent text-white border-0 pe-3">
                  <User size={20} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="p-2 bg-transparent text-white signup-input border-0"
                  style={{
                    color: "white",
                    "::placeholder": { color: "white" },
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-3 py-2">
                <InputGroup.Text className="bg-transparent text-white border-0 pe-3">
                  <Mail size={20} />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="p-2 bg-transparent text-white signup-input border-0"
                  style={{
                    color: "white",
                    "::placeholder": { color: "white" },
                  }}
                />
              </InputGroup>
              <InputGroup className="mb-5 py-2 d-flex align-items-center justify-content-center">
                <InputGroup.Text className="bg-transparent text-white border-0 pe-3">
                  <Lock size={20} />
                </InputGroup.Text>
                <Form.Control
                  type={show ? "password" : "text"}
                  placeholder="Password"
                  className="p-2 bg-transparent text-white signup-input border-0"
                  style={{
                    color: "white",
                    "::placeholder": { color: "white" },
                  }}
                />
                <div
                  className="d-flex align-items-center justify-content-center h-100 cursor-pointer px-3 cursor-pointer"
                  style={{ height: "100%" }}
                  onClick={toggleShow}
                >
                  {show ? (
                    <p className="m-0">Show</p>
                  ) : (
                    <p className="m-0">Hide</p>
                  )}
                </div>
              </InputGroup>
              <Button
                type="submit"
                className="w-100 signup-btn p-2 fs-5 rounded"
              >
                Create account
              </Button>
              <p className="text-center mt-3 d-flex align-items-center justify-content-center gap-2">
                Already have an account?{" "}
                <Link to="/login" className="text-blue text-decoration-none">
                  {" "}
                  Login
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
