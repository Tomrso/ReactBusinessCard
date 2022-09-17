import React from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"

export default function App() {
    return (
        <div className="background">
            <div className="wrapper">
                <div className="text_background">
                    <Info />
                    <About />
                    <Interests />
                </div>
                <Footer />
            </div>
        </div>
    )
}