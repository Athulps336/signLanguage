import React from 'react'
import './Home.css'
import Footer from './Footer'
function Home() {
    return (
        <>
            <div className='container my-5 outer-div'>
                <div className='row'>
                    <div className="col-12 ">
                        <h1 className='fw-bolder text-danger text-center'>Education</h1>
                        <h6 className='text-center'>Never stop Learning</h6>
                        <div className='w-100'>
                            <div className='button-readmore mx-auto mt-3'>
                                <a href="">READ MORE</a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div className='container my-5'>
                <div className="row about-content  mx-auto ">
                    <div className="col-lg-5 col-md-12 text-start about-text">
                        <h4 className='mt-3'>Little More About Us....</h4>
                        <h2 className='mt-2'>Learn Sign Language for Free !</h2>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae qui fugit facilis itaque. Fugit nesciunt aut, ullam mollitia velit ipsam soluta explicabo magnam illum quisquam voluptatum. Nobis sequi aut cupiditate?</p>

                    </div>
                    <div className="col-lg-7 col-md-12 about-img  ">
                        <div className='about-image text-center '>
                            <img className='w-75 ' src="https://i.postimg.cc/W3H65FMY/dl-beatsnoop-com-hq-2048547251-Xgou-Qh-RIGP.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className="row about-content  mx-auto ">
                    <div className="col-lg-7 col-md-12 about-img  ">
                        <div className='about-image text-center '>
                            <img className='w-75 ' src="https://i.postimg.cc/sXBnBZQ4/illustration-with-kids-talking-different-language-23-2148374371.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 text-start about-text">
                        <h4 className='mt-3'>Little More About Us....</h4>
                        <h2 className='mt-2'>Learn Sign Language for Free !</h2>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae qui fugit facilis itaque. Fugit nesciunt aut, ullam mollitia velit ipsam soluta explicabo magnam illum quisquam voluptatum. Nobis sequi aut cupiditate?</p>

                    </div>

                </div>
            </div>
            {/* second content */}
            <div className='container'>
                <div className=" second-content row text-white ">

                    <div className="col-lg-3 col-md-6 mol-sm-12  funlearning">
                        <div className='mx-auto mt-3 image-icon-round'>
                            <img className='icon-img ' src="https://i.postimg.cc/brPCL7xF/bulb.png" alt="" />
                        </div>
                        <h3 className='fw-bolder text-center mt-3'>Fun Learning</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque labore inventore, voluptatem nostrum, blanditiis, dicta asperiores recusandae consequuntur maiores quae! Nemo aliquid, sint itaque sunt ratione eveniet voluptates culpa!</p>

                    </div>
                    <div className="col-lg-3 col-md-6 mol-sm-12  guaranteed-work">
                        <div className='mx-auto mt-3 image-icon-round'>
                            <img className='icon-img ' src="https://i.postimg.cc/brPCL7xF/bulb.png" alt="" />
                        </div>
                        <h3 className='fw-bolder text-center mt-3'>Guaranteed Work</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque labore inventore, voluptatem nostrum, blanditiis, dicta asperiores recusandae consequuntur maiores quae! Nemo aliquid, sint itaque sunt ratione eveniet voluptates culpa!</p>

                    </div>
                    <div className="col-lg-3 col-md-6 mol-sm-12  resources">
                        <div className='mx-auto mt-3 image-icon-round'>
                            <img className='icon-img ' src="https://i.postimg.cc/brPCL7xF/bulb.png" alt="" />
                        </div>
                        <h3 className='fw-bolder text-center mt-3'>Resources</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque labore inventore, voluptatem nostrum, blanditiis, dicta asperiores recusandae consequuntur maiores quae! Nemo aliquid, sint itaque sunt ratione eveniet voluptates culpa!</p>

                    </div>
                    <div className="col-lg-3 col-md-6 mol-sm-12  library">
                        <div className='mx-auto mt-3 image-icon-round'>
                            <img className='icon-img ' src="https://i.postimg.cc/brPCL7xF/bulb.png" alt="" />
                        </div>
                        <h3 className='fw-bolder text-center mt-3'>Library</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque labore inventore, voluptatem nostrum, blanditiis, dicta asperiores recusandae consequuntur maiores quae! Nemo aliquid, sint itaque sunt ratione eveniet voluptates culpa!</p>

                    </div>
                </div>
            </div>
            {/* button */}
            <div className='w-100 mt-5'>
                <div className='button-learnMore mx-auto mt-3'>
                    <a href="">READ MORE</a>
                </div>

            </div>

          

<Footer/>
        </>
    )
}

export default Home