import React, { Component } from 'react'
import Navcard from '../components/navcard/Navcard'
import Navbar from '../components/navbar/Navbar'
import ProductsGallery from '../components/products/ProductsGallery'
import LogoCard from '../components/home/LogoCard'
import Footer from '../components/footer/Footer'

export class Products extends Component {
    componentDidMount () {
        document.getElementById("title").innerHTML = "products | outdoor designs"
    }

    render() {
        return (
            <div>
                <Navbar />
                <Navcard products={1} />
                <LogoCard />
                <h3 className="center white-text" style={{margin: '100px'}}>Availble Products:</h3>
                <ProductsGallery />
                <Footer />
            </div>
        )
    }
}

export default Products
