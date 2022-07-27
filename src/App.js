import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    let dataLength = data.length;
    const cards = data.map(item => {
        return (
            <Card
                lastElId={dataLength}
                key={item.id}
                {...item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}