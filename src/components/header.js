import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="nav-wrapper teal col s12" style={navStyle}>

                    <div className="row">
                        <div>
                            <div className="col s6">
                                <a href="/" className="brand-logo" style={titleStyle}>Roster System</a>
                            </div>
                            <div className="col s6">
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="/home">Roster</a></li>
                                    <li><a href="/newroster">Create</a></li>
                                    <li><a href="/register">Register</a></li>
                                    <li><a href="/logout">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment >
        )
    }

}

const navStyle = {
    fontWeight: 'bold',
    display: 'grid',
    textAlign: 'left'
}
const titleStyle = {
    position: 'relative',
    paddingLeft: '4%'
}
