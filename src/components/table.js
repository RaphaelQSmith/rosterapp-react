import React, { Component } from 'react'

export default class table extends Component {

    render() {
        return (
            <div>
                <div class="container" style={{marginTop: '5%'}}>    
   
    <table class="highlight centered responsive-table">
        <thead>
            <tr>
                <th></th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
            </tr>
        </thead>           
        <tbody>
            
            <h5></h5>
           {/*  <tr>
                <td>{{this.mor.shiftM}}</td>
                <td>{{this.mor.friM}}</td>
                <td>{{this.mor.satM}}</td>
                <td>{{this.mor.sunM}}</td>
                <td>{{this.mor.monM}}</td>
                <td>{{this.mor.tueM}}</td>
                <td>{{this.mor.wedM}}</td>
                <td>{{this.mor.thuM}}</td>
            </tr>
            <tr>
                <td>{{this.eve.shiftE}}</td>
                <td>{{this.eve.friE}}</td>
                <td>{{this.eve.satE}}</td>
                <td>{{this.eve.sunE}}</td>
                <td>{{this.eve.monE}}</td>
                <td>{{this.eve.tueE}}</td>
                <td>{{this.eve.wedE}}</td>
                <td>{{this.eve.thuE}}</td>
            </tr>
            */}
        </tbody>
    </table>
        <div>
            <a href="/delete/{{this._id}}" align="center" onclick="return confirm('This action is irreversible...')">Delete</a>
        </div>
     
</div>   
            </div>
        )
    }
}
