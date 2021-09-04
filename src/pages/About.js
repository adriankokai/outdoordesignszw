import React, { Component } from 'react'
import AboutUs from '../components/about/AboutUs'
import ContactCard from '../components/about/ContactCard'
import Footer from '../components/footer/Footer'
import LogoCard from '../components/home/LogoCard'
import Navbar from '../components/navbar/Navbar'
import Navcard from '../components/navcard/Navcard'

export class About extends Component {
    componentDidMount () {
        document.getElementById("title").innerHTML = "about | outdoor designs"
    }
    render() {
        return (
            <div>
                <Navbar />
                <Navcard about={1} />
                <AboutUs />
                <LogoCard />
                <h3 className="center white-text" >Contact Us</h3>
                <ContactCard />
                <br /><br /><br />
                <Footer />
            </div>
        )
    }
}

export default About
