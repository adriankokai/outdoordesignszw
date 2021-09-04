import React, { Component } from 'react'
import Footer from '../components/footer/Footer'
import LogoCard from '../components/home/LogoCard'
import ProductGalleryCard from '../components/home/ProductGalleryCard'
import Navbar from '../components/navbar/Navbar'
import Navcard from '../components/navcard/Navcard'
import bg from '../images/couch.jpg'
import './home.css'

export class Home extends Component {

    componentDidMount () {
        document.getElementById("title").innerHTML = "home | outdoor designs"
    }

    

    render() {
        return (
            <div className="" style={{backdropFilter: 'grayscale(50%)'}} >
                <Navbar />
                <Navcard home={1} />
                <ProductGalleryCard />
                <LogoCard />
                <Footer />
            </div>
        )
    }
}

export default Home
