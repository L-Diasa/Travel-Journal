import React from "react"
import location from "../images/location-icon.png"

export default function Card(props) {
    console.log(props.imageUrl)
    return (
        <>
            <div className="card">
                <img className="card--image" src={props.imageUrl} />
                <div className="card--info">
                    <p className="card--info--location">
                        <img src={location} alt="" className="location-icon"/>
                        <span className="card--info--locationName">{props.location.toUpperCase()}</span>
                        <a className="gray" href={props.googleMapsUrl}>View on Google Maps</a>
                    </p>
                    <h2 className="card--info--title">
                    {props.title}
                    </h2>
                    <p className="semi-bold">
                    {props.startDate} - {props.endDate}
                    </p>
                    <p className="card--info--about">{props.description}
                    </p>
                </div>
            </div>
        </>
    )
}