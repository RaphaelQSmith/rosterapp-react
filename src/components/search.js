import React, { Component } from 'react'


export default class search extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="col s10 " style={{ padding: '100px 200px 0px 200px' }}>
                    <form enctype="application/json" action="/roster/" method="POST">
                        <input type="hidden" name="user_id" value="{{user_id}}" />
                        <input type="text" name="date" class="datepicker col s3 offset-m6" placeholder="Select a date" />
                        <button class="btn waves-effect waves-light col s3 offset-m6" type="submit">Search</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
