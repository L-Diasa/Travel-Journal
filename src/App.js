import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    let dataLength = data.length;
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })        
    
    return (
        <div>
            <div className="app">
                <Navbar />
                <section className="cards-list">
                    {cards}
                </section>
            </div>
            <Footer/>
        </div>
    )
}