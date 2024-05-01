import React from 'react'
import "../css/HomePage.css"
import roles from "../images/role.png"
import cert01 from "../images/cert01.jpg"
import cert02 from "../images/cert02.jpg"
import cert03 from "../images/cert03.jpg"

const HomePage = () => {
    return (
        <div className="container">
            <div className="margins">
                <div className="horizontal left"></div>
                <div className="horizontal right"></div>
                <div className="vertical top"></div>
                <div className="vertical bottom"></div>
            </div>
            <div className="content">

                <div className="nav-bar">
                    <div className="logo">
                        <img src="./ak-high-resolution-logo-transparent.png" alt="" />
                    </div>
                    <div className="hamburger">MENU</div>
                    <div className="nav-items">
                        <div className="item"><a href="">Home</a></div>
                        <div className="item"><a href="">About</a></div>
                        <div className="item"><a href="">Projects</a></div>
                        <div className="item"><a href="">Notes</a></div>
                        <div className="item contact-me"><a href="">Contact Me</a></div>
                    </div>
                </div>

                <div className="introduction">
                    <div className="my-roles">

                        <img src={roles} alt="hello" />

                    </div>
                    <div className="description">
                        <div>
                            <p>I am <br />Abhishek Kumar,</p>
                            <p>I work as an AWS Cloud and Fullstack (MERN) Web Developer, specializing in building scalable cloud solutions and dynamic web applications.</p>
                        </div>
                    </div>
                </div>

                <div className="empty-area">

                </div>
                <div className="achivements ">
                    <h2>Certifications<br />&nbsp;&nbsp;&nbsp;/ Badges</h2>
                    <div className="slideshow ">
                        <div className="slides">
                            <div className="cert">
                                <img src={cert01} alt="" />
                            </div>
                            <div className="cert">
                                <img src={cert02} alt="" />
                            </div>
                            <div className="cert">
                                <img src={cert03} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty-area">

                </div>
                <div className="personal-projects">
                    <h2>Personal <br /> &nbsp;/ Projects</h2>
                    <div className="project-list">
                        <div className="project">Visual Insight Generator</div>
                        <div className="project">Fullstack MERN Blog App</div>
                        <div className="project">Todo-List</div>

                    </div>
                </div>
                {/* <div className="empty-area">

                </div>
                <div className="contact-section">
                    <p>lets build</p>
                    <h2><span>AMAZING THINGS</span></h2>
                    <p>together</p>
                    <a href="">Contact Me</a>
                </div> */}
            </div>
        </div>
    )
}

export default HomePage
