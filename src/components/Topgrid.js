import React from "react";
import Topcard from "./Top-card";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import Facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import arrow from "../images/icon-up.svg";


export default function Topgrid(props) {

    return (
        <div className="container">
            <div className="grid grid-row">
                <Topcard
                    logo={Facebook}
                    name="nathanf"
                    followers={1987}
                    arrow={arrow}
                    rate={12}
                />
                <Topcard
                    logo={twitter}
                    name="nathanf"
                    followers={1044}
                    arrow={arrow}
                    rate={99}
                />
                <Topcard
                    logo={instagram}
                    name="realnathanf"
                    followers={"11k"}
                    arrow={arrow}
                    rate={144}
                />
                <Topcard
                    logo={youtube}
                    name="Nathan F."
                    followers={8239}
                    arrow={arrow}
                    rate={200}
                />
            </div>
        </div>
    )

}