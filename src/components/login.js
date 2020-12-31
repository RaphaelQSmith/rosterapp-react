import React, { PureComponent } from 'react'

export default class table extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div class="wrapper">
                    <div className="container col s12" style={{ padding: '200px 200px 0px 200px' }}>
                        <form action="/user/login" method="post">
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

