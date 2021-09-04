import React, { Component } from 'react'

export class ContactCard extends Component {
    render() {
        return (
            <div class="row z-depth-5" style={{margin: '1rem'}}>
                <div className="col s12 m8 offset-m2" >
                    <div className="row" >
                        <div class="col s12 m4">
                            <div class="card center transparent z-depth-0 teal-text text-lighten-3" >
                                <h4>Location:</h4>
                                <p>
                                    <i className="material-icons">home</i>
                                    <span>4785 Glen Norah A</span><br />
                                    <span>Harare, Zimbabwe</span>
                                </p>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card center transparent z-depth-0 teal-text text-lighten-3" >
                                <h4>Email:</h4>
                                <p>
                                    <i className="material-icons">email</i>
                                    <span>bvembeta@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div class="col s12 m4">
                            <div class="card center transparent z-depth-0 teal-text text-lighten-3" >
                                <h4>Call</h4>
                                <p>
                                    <i className="material-icons">phone</i>
                                    <span>+263774429617</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactCard
