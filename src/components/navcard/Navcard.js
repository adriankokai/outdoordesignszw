import React, { Component } from 'react'
import white from '../../images/white.jpg'
import white1 from '../../images/white1.jpg'
import couch from '../../images/couch.jpg'
import logo from '../../images/logo.png'

export class Navcard extends Component {
    bg = this.props.portfolio ? white1:white
    render() {
        return (
            <div class="row z-depth-5" style={{margin: '1rem'}} >
                <div class="col s12" style={this.cardStyles} >
                    <div class="card transparent z-depth-0 " >
                            <div className="hide-on-med-and-down">
                                <a 
                                    href="#" 
                                    className="btn transparent z-depth-5 white-text " 
                                    style={{fontSize: '1.8rem', fontFamily: 'freight-big-pro'}}
                                >
                                    outdoor
                                    designs zw
                                </a> 
                                <a 
                                    href="/about" 
                                    className="btn black right" 
                                    style={this.props.about ? linkButtonStylesActive : linkButtonStyles}
                                >
                                    about
                                </a>
                                <a 
                                    href="/products"
                                    className="btn black right" 
                                    style={this.props.products ? linkButtonStylesActive : linkButtonStyles}
                                >
                                    products
                                </a>
                                <a 
                                    href="/"
                                    className="btn black right" 
                                    style={this.props.home ? linkButtonStylesActive : linkButtonStyles}
                                >
                                    home
                                </a>
                            </div>
                            <div className="center"  >
                                {
                                    this.props.portfolio ?

                                    "the web that spiders build"

                                    :

                                    <img src={logo} style={imageStyles} />
                                }
                            </div>
                    </div>
                </div>
            </div>
        )
    }

    cardStyles = {
        backgroundImage: `url(${couch})`,
        backgroundRepeat: "noRepeat",
        height: '90vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '2.5rem',
        filter: 'grayscale(40%)',
        opacity: '95%'
        
        
    }
}



const linkButtonStyles ={
    marginLeft: '10px',
    fontSize: '0.7rem'
}

const linkButtonStylesActive ={
    marginLeft: '10px',
    fontSize: '0.7rem',
    opacity: '50%'
}

const imageStyles = {
    maxWidth: '100%',
    
}

export default Navcard
