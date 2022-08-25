import React from "react";
export default function Bottomcard(props) {

    return (
        <div className="bottom-card">
            <div className="bottom-card-content">
                <div className="page flex">
                    <p>{props.page}</p>
                    <img src={props.image} alt="" />
                </div>
                <div className="performance">
                    <h2>{props.clicks}</h2>
                    <div className="rate flex">
                        <img src={props.arrow} alt="arrow" />
                        {props.rate}
                        <p>%</p>
                    </div>
                </div>
            </div>
        </div>
    )

}