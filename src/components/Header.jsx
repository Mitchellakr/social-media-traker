import React from "react";

export default function Header() {

    return (
        <header>
            <div className="container">
                <div className="header-content flex">
                    <div className="title">
                        <h1>Social Media Dashboard</h1>
                        <p>Total Followers:{ }</p>
                    </div>

                    <div className="color-modes flex">
                        <h3 className="current-mode">Dark mode</h3>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    )

}