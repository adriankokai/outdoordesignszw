import React, { Component } from 'react'
import Slides from './Slides'

export class ProductGalleryCard extends Component {
    render() {
        return (
            <div class="row z-depth-5" style={{margin: '1rem'}} >
                <div className="blue" />
                <div class="col s12 m7">
                    <div class="card transparent z-depth-0 darken-1">
                        <div class="card-content center white-text" style={{paddingTop: '20%'}} >
                            <h3>Designs</h3>
                            <p>
                                A great selection for Designs and 
                                colours 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m5">
                    <Slides />
                </div>
            </div>
        )
    }
}

export default ProductGalleryCard
