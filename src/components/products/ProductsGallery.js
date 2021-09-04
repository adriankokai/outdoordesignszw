import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ceiling from '../../images/productgallery/ceiling.jpg'
import walls from '../../images/productgallery/walls.jpg'
import kob from '../../images/productgallery/kob.jpg'

export class ProductsGallery extends Component {
    render() {
        return (
            <Carousel 
                autoPlay={1} 
                infiniteLoop={1}
                interval={2000}
                stopOnHover={0}
            >
                <div>
                    <img src={ceiling} />
                    <p className="legend">ceiling designs</p>
                </div>
                <div>
                    <img src={walls} />
                    <p className="legend">stunning walls</p>
                </div>
                <div>
                    <img src={kob} />
                    <p className="legend">for your kitchen/bathroom</p>
                </div>
            </Carousel>
        )
    }
}

export default ProductsGallery
