import React from "react";
import "./Register.css";
function Register() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form">
                                <h2 className="fw-bolder">Register Now</h2>
                                <div className="inputbox mt-3">
                                    {" "}
                                    <span>Full Name</span>{" "}
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name=""
                                        className="form-control"
                                    />{" "}
                                </div>
                                <div className="inputbox mt-3">
                                    {" "}
                                    <span>Email</span>{" "}
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name=""
                                        className="form-control"
                                    />{" "}
                                </div>
                                <div className="inputbox mt-3">
                                    {" "}
                                    <span>Phone</span>{" "}
                                    <input
                                        type="text"
                                        placeholder="+91 998855XXXX"
                                        name=""
                                        className="form-control"
                                    />{" "}
                                </div>
                                <div className="d-flex justify-content-between mt-3 mb-3 align-items-center">
                                    <div className="text-right">
                                        {" "}
                                        <button className="btn btn-success register btn-block">
                                            Register
                                        </button>{" "}
                                    </div>{" "}
                                </div>
                                <div className="form-check mt-2">
                                    {" "}
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        checked
                                    />{" "}
                                    <label className="form-check-label" for="flexCheckChecked">
                                        {" "}
                                        I agree to the terms and conditions of <br /> {" "}
                                        <a href="" className="privacy">
                                            Privacy & Policy
                                        </a>{" "}
                                    </label>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center mt-5">
                                {" "}
                                <img src="https://i.imgur.com/98GXnDD.png" width="400" />{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
