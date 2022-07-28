import React from "react"
import {GiEarthAmerica} from "react-icons/gi"

export default function Navbar() {
    return (
        <nav className="nav--bar">
            <GiEarthAmerica className="nav--logo"/>
            <h1 className="nav--text">my travel journal</h1>
        </nav>
    )
}