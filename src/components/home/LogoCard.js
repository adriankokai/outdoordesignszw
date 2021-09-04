import { getSuggestedQuery } from '@testing-library/react'
import React, { Component } from 'react'
import logo from '../../images/logo.png'


export class LogoCard extends Component {
    render() {
        return (
            <div class="row z-depth-5" style={{margin: '1rem'}}>
                <div class="col s12">
                    <div class="card center transparent z-depth-0" >
                        <img src={logo} style={{maxWidth: '100%'}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default LogoCard
