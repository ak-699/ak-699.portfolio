import React from 'react'
import "../css/HomePage.css"

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
                        <div>
                            <h2><span>AWS Cloud</span></h2>
                            <h2>&</h2>
                            <h2><span>Fullstack Web</span></h2>
                        </div>
                        <h2><span>Developer</span></h2>
                    </div>
                    <div className="description">
                        <div>
                            <p>I am Abhishek</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum est quaerat. Ab quibusdam facilis ex alias laboriosam molestiae nihil, blanditiis voluptatem hic incidunt, porro doloribus, qui temporibus provident optio!</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className="empty-area">

                </div>
                <div className="achivements">
                    <h2>Achievents and Certs</h2>
                    <div className="slideshow">
                        <div className="cert"></div>
                        <div className="cert"></div>
                        <div className="cert"></div>
                        <div className="cert"></div>

                    </div>
                </div>
                <div className="empty-area">

                </div>
                <div className="personal-projects">
                    <h2>Personal Projects</h2>
                    <div className="project-list">
                        <div className="project">Visual Insight Generator</div>
                        <div className="project">Fullstack MERN Blog App</div>
                        <div className="project">Todo-List</div>

                    </div>
                </div>
                <div className="empty-area">

                </div>
                <div className="contact-section">
                    <p>lets build</p>
                    <h2><span>AMAZING THINGS</span></h2>
                    <p>together</p>
                    <a href="">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage
