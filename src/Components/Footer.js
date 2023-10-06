import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <>
            <footer className='footer_main'>
                <div className="mt-5 pt-5 pb-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-xs-12 about-company">
                                <h2>Heading</h2>
                                <p className="pr-5 text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                                {/* <p><a  href="#"><i className="fa fa-facebook-square mr-1"></i></a ><a  href="#"><i className="fa fa-linkedin-square"></i></a ></p> */}
                            </div>
                            <div className="col-lg-3 col-xs-12 links">
                                <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                                <ul className="m-0 p-0">
                                    <li> <a className='footer-link'  href="#">Lorem ipsum</a ></li>
                                    <li> <a className='footer-link'  href="#">Nam mauris velit</a ></li>
                                    <li> <a className='footer-link'  href="#">Etiam vitae mauris</a ></li>
                                    <li> <a className='footer-link'  href="#">Fusce scelerisque</a ></li>
                                    <li> <a className='footer-link'  href="#">Sed faucibus</a ></li>
                                    <li> <a className='footer-link'  href="#">Mauris efficitur nulla</a ></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-xs-12 location">
                                <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                                <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                                <p className="mb-0"><i className="fa fa-phone mr-3"></i>{'  '}+91 99550 XXXXX</p>
                                <p><i className="fa fa-envelope-o mr-3"></i>{'  '}Sample@gmail.com</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col copyright">
                                <p className="text-center"><small className="text-dark ">© 2023. All Rights Reserved.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer