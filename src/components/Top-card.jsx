import React from "react";
export default function Topcard(props) {

    return (
        <div className="top-card">
            <div className="top-card-content">
                <div className="social flex">
                    <img src={props.logo} alt="logo" />
                    <p>@{props.name}</p>
                </div>
                <h2>{props.followers}</h2>
                <p>FOLLOWERS</p>
                <div className="rate flex">
                    {/* {props.arrow} */}
                    {props.rate}
                    <p>Today</p>
                </div>
            </div>
        </div>
    )

}