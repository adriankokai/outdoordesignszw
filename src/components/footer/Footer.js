import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer class="page-footer transparent z-depth-5 ">
                <div class="container">
                    <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Outdoor Designs</h5>
                        <p class="grey-text text-lighten-4">Keep your outdoors looking tidy</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="/">home</a></li>
                        <li><a class="grey-text text-lighten-3" href="/products">products</a></li>
                        <li><a class="grey-text text-lighten-3" href="/about">about</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                    © 2021 outdoor designs.
                    <a class="grey-text text-lighten-4 right" href="#!">developed by spidersdotco</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
