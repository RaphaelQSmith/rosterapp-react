import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer class="page-footer teal lighten-2" style={footerStyle}>
                    <div class="footer-copyright">
                        <div class="container">
                            ©2020 Copyright - Raphael Smith
                            <a class="grey-text text-lighten-4 right" href="http://www.laundryonline.com/" target="false">Laundry
                                Online</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

const footerStyle = {
    position: `absolute`,
    left:0,
    bottom:0,
    right:0
}

