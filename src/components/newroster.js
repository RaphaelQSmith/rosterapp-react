import React, { Component } from 'react'

export class newroster extends Component {
    render() {
        return (

            <div>
                <div class="container">
<form enctype="application/json" action="/newroster" method="POST">
    <div class="input-field col s12">
        <div class="col s3">
            <input type="text" name="date" class="datepicker" placeholder="Select a date" />
        </div>
        <div class="col s3">
            <select name="store">
                <option value="" disabled selected>Store</option>
                <option value="Ranelagh">Ranelagh</option>
                <option value="Washers">Washers</option>
                <option value="Basket">Basket</option>
            </select>
            <label for="store"></label>
        </div>     
    </div>   
    <div class="">
        <h5>Morning</h5>
    </div>  

    <div class="input-field col s12">
        <div class="col s3">
            <select name="friM">
            </select>
        </div>
        <div class="col s3">
            <select name="satM">

            </select>
        </div>     
        <div class="col s3">
            <select name="sunM">

            </select>
        </div>   
        <div class="col s3">
            <select name="monM">

            </select>
        </div>   
        <div class="col s3">
            <select name="tueM">

            </select>
        </div>  
        <div class="col s3">
            <select name="wedM">
            </select>
        </div>   
        <div class="col s3">
            <select name="thuM">
            </select>
        </div>              
    </div> 

    <div class="">
        <h5>Evening</h5>
    </div> 
    <div class="input-field col s12">
        <div class="col s3">
            <select name="friE">

            </select>
        </div>
        <div class="col s3">
            <select name="satE">
            </select>
        </div>     
        <div class="col s3">
            <select name="sunE">
            </select>
        </div>   
        <div class="col s3">
            <select name="monE">
            </select>
        </div>   
        <div class="col s3">
            <select name="tueE">
            </select>
        </div>  
        <div class="col s3">
            <select name="wedE">
            </select>
        </div>   
        <div class="col s3">
            <select name="thuE">

            </select>
        </div>              
    </div> 

    <button class="btn waves-effect waves-light col s1 offset-m8" type="submit">Add</button>
    
</form>
</div>
           </div>



        )
    }
}

export default newroster



