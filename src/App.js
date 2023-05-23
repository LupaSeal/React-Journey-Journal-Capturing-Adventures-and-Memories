import React from "react"
import "./style.css"
import Header from "./components/Header"
import Cards from './components/Cards'
import data from "./components/data"


const App = () => {

    const cards = data.map(card => {
        return (
            <Cards
            
            {...card}
            
            />
        )
    })
    return (
        <div className="main">
            <Header />
            {cards}
        </div>
    )
}

export default App