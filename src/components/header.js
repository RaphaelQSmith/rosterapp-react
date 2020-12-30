import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
                                <ul id="nav-mobile" className="hide-on-med-and-down">
                                    <Link to='/'>
                                        <li>Roster</li>
                                    </Link>
                                    <Link to='/newroster'>
                                        <li>Create</li>
                                    </Link>
                                    <Link to='/createUser'>
                                        <li>Register</li>
                                    </Link>
                                    <Link to='/logout'>
                                        <li>Logout</li>
                                    </Link>
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


