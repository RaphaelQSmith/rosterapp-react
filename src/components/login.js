import React, { Component } from 'react'
import axios from 'axios'


export default class table extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="wrapper">
                    <div className="container col s12" style={{ padding: '200px 200px 0px 200px' }}>
                        <form onSubmit={this.handleSubmit}>
                            <div className='col s6'>
                                <input type="email" name="email" class="text" placeholder="Email" required />
                                <input type="password" name="password" class="text" placeholder="Password" required />
                            </div>
                            <div>
                                <button class="btn waves-effect waves-light" type="submit">Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

