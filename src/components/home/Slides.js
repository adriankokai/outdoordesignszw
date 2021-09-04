import React, { Component } from 'react'
import colortile from '../../images/productgallery/colortile.jpg'
import whitetile from '../../images/productgallery/whitetile.jpg'
import './slides.css'


export class Slides extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            slideIndex: 1,
            images: [colortile, whitetile, colortile],
            caption: '',
        }
        this.showSlides = this.showSlides.bind(this)
    }

    showSlides () {
        this.setState( state => ({
            slideIndex: state.slideIndex === 3 ?
                        1 
                        : 
                        state.slideIndex + 1,
        }))
        setTimeout(this.showSlides, 3000)
    }

    componentDidMount() {
        this.showSlides()
    }

    render() {
        return (
            <>
                <div >
                    <div class="">
                        <div class="white-text" >{this.state.slideIndex} / 3</div>
                        <img 
                        src={this.state.images[this.state.slideIndex - 1]} 
                        style={{width:"100%"}}
                        />
                        <div>{this.state.caption}</div>
                    </div>

                    <br />

                    <div style={{textAlign: "center"}}>
                        <span class={this.state.slideIndex === 1 ? "dot active":"dot"} ></span> 
                        <span class={this.state.slideIndex === 2 ? "dot active":"dot"}></span> 
                        <span class={this.state.slideIndex === 3 ? "dot active":"dot"}></span> 
                    </div>
                </div>
            </>
        )
    }
}

export default Slides
