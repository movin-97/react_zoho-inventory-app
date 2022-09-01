import React, { useState } from "react";
import "./Login.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yap from "yup";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const myValidateForm = yap.object().shape({
  username: yap.string().min(4).max(16).required("Username is Required"),
  password: yap.string().min(8).required("Password is Required"),
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [create, setCreate] = useState("");

  const navigate = useNavigate()

  console.log(username, password);
  const createUser = (resetForm) => {
    axios
      .post("https://reqres.in/api/users", {
        username,
        password,
      })
      .then((res) => {
        setCreate(res.status);
        setIsLoading(false);

        setTimeout(() => {
          setIsLoading(true);
          resetForm();
          navigate('/home');
        }, 3000);
      })
      .catch((err) => {
        setCreate(err.response.status);
      });
  };
  // const handleFormSubmit = (value,{resetFrom}) => {
  //   createUser();
  //   console.log(value,resetFrom);
  // };
  return (
    <div className="container row mt-5 ms-auto me-auto shadow rounded">
      <div className="col-12 col-lg-6 p-4 border-lg-end">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={myValidateForm}
          onSubmit={(value, { resetForm }) => {
            createUser(resetForm);
            setUsername(value.username);
            setPassword(value.password);
          }}
        >
          {(formikProps) => {
            const { errors, touched } = formikProps;
            return (
              <Form className="p-5" onSubmit={formikProps.handleSubmit}>
                <div className="" style={{ lineHeight: "70%" }}>
                  <img
                    src="https://css.zohostatic.com/iam/M_5264621/v2/components/images/Zoho_logo.png"
                    alt="logo"
                    width={70}
                    className="mb-2"
                  />
                  <h4 className="">Sign in</h4>
                  <p>to access Inventory</p>
                </div>
                {create === "201" ? (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Successfully</strong> Login.
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : create === "404" ? (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Username or Password</strong> Not Match Matching!!!
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : null}

                <div className="mt-5 ">
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User Name"
                    className={`${
                      errors.username && touched.username
                        ? "form-control  border-danger "
                        : ""
                    }form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="username"
                    className="text-danger"
                  />
                </div>
                <div className="mt-4">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={`${
                      errors.password && touched.password
                        ? "form-control  border-danger "
                        : ""
                    }form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="password"
                    className="text-danger"
                  />
                </div>
                {isLoading ? (
                  <button type="submit" className="btn btn-primary w-100 mt-5">
                    Login
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary w-100 mt-5">
                    <div className="spinner-border text-white" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="col-6 text-center d-none d-lg-block">
        <div className="">
          <img
            src="https://accounts.zoho.com/v2/components/images/recovery_illustration2x.png"
            alt=""
            width={400}
            className="img-fluid"
          />
        </div>
        <div className="pe-5 ps-5 ms-5 me-5 pb-3">
          <h6>
            <strong> MFA for all accounts</strong>
          </h6>
          <small className="">
            Secure online accounts with OneAuth 2FA. Back up OTP secrets and
            never lose access to your accounts.
          </small>
        </div>
        <div className="pb-3">
          <i className="fa-solid fa-ellipsis fs-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Login;
