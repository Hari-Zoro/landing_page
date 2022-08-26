import React from 'react'
// import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import { Navbar } from './components'
import { Banner , Categories , Statistics , Features, Guide_section , Testimonials, Footer} from './containers'
import './App.css'

const App = () =>{
    return (
        <div className="App">
            <Banner />
            <Categories />

            <div className="mid-line" >
                <hr className="feat-line" />
            </div>

            <Statistics />

            <div className="mid-line">
                <hr className="feat-line" />
            </div>
            
            <Features />

            <div className="mid-line">
                <hr className="feat-line" />
            </div>

            <Guide_section />

            

            {/* <Testimonials /> */}
            <Footer />
        </div>
    )
}

export default App