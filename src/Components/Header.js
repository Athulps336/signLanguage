import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fw-bold sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-dark" to="/">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-dark"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <i className="fa-solid fa-user"></i> User
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/tutorials">Tutorials</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            <div className='modal' id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login/Register</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label htmlFor="email-id">Enter email</label>
                                <input id='email-id' type="email" className='form-control' />
                                <label htmlFor="psw">Enter Password</label>
                                <input id='psw' type="password" className='form-control' />
                            </form>
                            <div className='mt-3 text-end' data-bs-dismiss="modal">
                                <span>New User ?</span>{' '}
                                <Link className='register-link' to='/register' >Register Now</Link>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

