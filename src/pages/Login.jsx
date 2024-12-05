import { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Mail, Lock } from "lucide-react";
import image from "../assets/bg-auth.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toggleShow = () => {
    setShow(!show);
  };

  // Using React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigateByRole = (role) => {
    switch (role) {
      case "SUPER_ADMIN":
        navigate("/superadmin");
        break;
        case "COMPANY":
          navigate("/company");
          break;
      case "ADMIN":
        navigate("/admin");
        break;
      case "RECRUITER":
        navigate("/recruiter");
        break;
      case "USER":
        navigate("/user");
        break;
      case "EMPLOYEE":
        navigate("/employee");
        break;
      default:
        navigate("/");
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/login", data);
      if (response.data.error) {
        toast.error(response.data.response);
      } else if (!response.data.error) {
        const token = response.data.response;
        const decoded = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("role", decoded?.claims?.role);
        const role = localStorage.getItem("role");
        console.log(role);
        navigateByRole(role);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
      toast.error(error.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      navigateByRole(role);
    }
  }, [navigate]);
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
        className="w-100 top-0 position-absolute pt-md-5 pt-sm-2 bg-transparent"
      >
        <Container>
          <Link
            to="/"
            className="text-decoration-none bg-transparent text-white fs-2"
          >
            WAR
          </Link>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col
            md={7}
            className="d-flex justify-content-center align-items-center login-welcome-text"
            style={{ zIndex: 100 }}
          >
            Welcome Back
          </Col>
          <Col
            md={4}
            style={{ zIndex: "100" }}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <h2 className="mb-4 text-center">Login</h2>
            <Form
              className="w-100 w-md-75"
              onSubmit={handleSubmit(onSubmit)} // React Hook Form's handleSubmit
            >
              {/* Email Field */}
              <div className="mb-3">
                <InputGroup className="py-2 mt-3">
                  <InputGroup.Text className="bg-transparent text-white border-0 pe-3">
                    <Mail size={20} />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="p-2 bg-transparent text-white signup-input border-0 no-focus-outline"
                    style={{ color: "white" }}
                    {...register("email", { required: "Email is required" })}
                  />
                </InputGroup>
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              {/* Password Field */}
              <div className="mb-3">
                <InputGroup className="py-2 d-md-flex align-items-center">
                  <InputGroup.Text className="bg-transparent text-white border-0 pe-3">
                    <Lock size={20} />
                  </InputGroup.Text>
                  <Form.Control
                    type={show ? "password" : "text"}
                    placeholder="Password"
                    className="p-2 bg-transparent text-white signup-input border-0 no-focus-outline"
                    style={{ color: "white" }}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
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
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-100 signup-btn p-2 fs-5 rounded no-focus-outline"
              >
                Login
              </Button>
              {/* <p className="text-center mt-3 d-flex align-items-center justify-content-center gap-2">
                {"Don't"} have an account?{" "}
                <Link to="/signup" className="text-blue text-decoration-none">
                  Create Account
                </Link>
              </p> */}
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Login;
