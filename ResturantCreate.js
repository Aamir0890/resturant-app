import React, { Component } from 'react'

export default class ResturantCreate extends Component {
  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
    }
  }
  create(){
     fetch("http://localhost:3000/resturant",{
      method:"Post",
      headers:{
       'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
     }).then((result)=>{
      result.json().then((resp)=>{
        
        alert("Resturant has been added")
      })
     })
  }
  render() {
    return (
      <div>
        <h1>Resturant Create</h1>
        <div>
          <input onChange={(event)=>{this.setState({name:event.target.value})}}
          placeholder="Resturant Name"/> <br></br>
           <input onChange={(event)=>{this.setState({email:event.target.value})}}
          placeholder="Resturant Email"/> <br></br>
           <input onChange={(event)=>{this.setState({rating:event.target.value})}}
          placeholder="Resturant Rating"/> <br></br>
           <input onChange={(event)=>{this.setState({address:event.target.value})}}
          placeholder="Resturant Address"/> <br></br>
          <button onClick={()=>{this.create()}}>Add resturant</button>
        </div>
        
      </div>
    )
  }
}
