import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="nav-wrapper teal" style={navStyle}>
                    <div className="container">
                        <div className="row">
                            <div>
                                <div className="col s4">
                                    <a href="/" className="brand-logo" style={titleStyle}>Roster System</a>
                                </div>
                                <div className="col s6">
                                    <ul id="nav-mobile" class="right hide-on-med-and-down col-s4">
                                        <li><a href="/home">Roster</a></li>
                                        <li><a href="/newroster">Create</a></li>
                                        <li><a href="/register">Register</a></li>
                                        <li><a href="/logout">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment >
        )
    }

}

const navStyle = {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'left'
}
const titleStyle = {
    position: 'relative'

}