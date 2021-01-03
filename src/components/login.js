import React, { Component } from 'react'
import axios from 'axios'


export default class table extends Component {
   constructor(props){
       super(props)
   
   
       this.state = {
        email: '',
        password: '',
        loginErrors: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   handleSubmit(event){
    const { email, password} = this.state;
    axios.post('http://localhost:3000/sessions', {
        user:{
            email: email,
            password: password
        }
    },
    {withCredentials: true}
    )
    .then(response => {
        console.log('res from login', response)
        
        
        // if(response.data.status === 'created'){
        //     this.props.handleSuccessfulAuth(response.data)
        // }
    })
    .catch(error=>{
        console.log('Login not successful', error)
    })
    event.preventDefault()
   }

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

