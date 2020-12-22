import React, { PureComponent } from 'react'

export default class table extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div>
                    <form action="/user/login" method="post">
                        <div class="col s12">
                            <input type="email" name="email" class="text col s4 offset-m4" placeholder="Email" required />
                            <input type="password" name="password" class="text col s4 offset-m4" placeholder="Password" required />
                        </div>
                        <div class="col s12">
                            <button class="btn waves-effect waves-light col s4 offset-m4" type="submit">Login
                                    <i class="material-icons right">login</i>
                            </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
