import React, { Component } from 'react'

export default class register extends Component {
    render() {
        return (
                <div class="row" style={{paddingTop: "10%"}}>
                    <form class="col s8" enctype="application/json" action="/user/signup" method="POST" autocomplete="off">
                        <div class="row">
                            <div class="input-field col s12 offset-m3">
                                <div class="col s6">
                                    <input id="fname" name="fname" type="text" />
                                    <label for="fname">First Name</label>
                                </div>
                                <div class="col s6">
                                    <input id="lname" name="lname" type="text" />
                                    <label for="lname">Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 offset-m3">
                                <div class="col s6">
                                    <input id="email" type="email" name="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                                <div class="col s6">
                                    <input id="mobile" type="tel" name="mobile" class="validate" />
                                    <label for="mobile">Mobile</label>
                                </div>
                            </div>
                        </div>    
                        <div class="row">    
                            <div class="input-field col s12 offset-m3">
                                <div class="col s6">
                                    <input id="password" type="password" name="password" class="validate" />
                                    <label for="password">Password</label>
                                </div>
                                <div>
                                    <button class="btn waves-effect waves-light col s3 offset-m8" type="submit">Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}
