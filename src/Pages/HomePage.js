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
                        {"</> "}AK
                    </div>
                    <div className="nav-items">
                        <div className="item"><a href="">Home</a></div>
                        <div className="item"><a href="">About</a></div>
                        <div className="item"><a href="">Projects</a></div>
                        <div className="item"><a href="">Notes</a></div>
                        <div className="item"><a href="">Contact Me</a></div>
                    </div>
                </div>

                <div className="introduction">
                    <div className="my-roles">
                        <h2>Fullstack Web Developer</h2>
                        <h2>AWS Solutions Architect</h2>
                    </div>
                    <div className="description"></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
