import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    login()
    {
        console.warn(this.state)

        fetch("http://localhost:3000/resturant?q="+this.state.name).then((data)=>{
          data.json().then((resp)=>{
            console.warn("resp",resp) 
              
          })
        })
    }
  render() {
    return (
      <div>
        <input type="text" placeholder="enter name" name="user" onChange={(event)=>this.setState({name:event.target.value})}/><br></br>
        
        <input type="password"placeholder='enter password' name="password" onChange={(event)=>this.setState({password:event.target.value})}/><br></br>
        <button onClick={()=>{this.login()}}>login</button>
      </div>
    )
  }
}
