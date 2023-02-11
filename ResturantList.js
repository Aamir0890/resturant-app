import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
export default class ResturantList extends Component {
  constructor()
  {
    super();
    this.state={
      list: null,
    }
  }
   componentDidMount()
  {
   this.getData()
  }
  getData(){
    fetch("http://localhost:3000/resturant").then((response)=>{
              response.json().then((result)=>{
                
                this.setState({list:result})
              })
    })
  }
  delete(id){
     fetch("http://localhost:3000/resturant/"+id,
     {
      method:"DELETE",
     }).then((result)=>{
      result.json().then((resp)=>{
        alert("Resturant has been deleted")
        this.getData()
      })
     })

    
  }
  render(){
    return(
     <div>
      <h1>Resturant List</h1>
      {
        this.state.list?
        <div>
             
              <Table stripped bordered hover>
              <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Rating</th>
          <th>Location</th>
          <th>Operation</th>
        </tr>
      </thead>
                {
              this.state.list.map((item,i)=>
              <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.rating}</td>
          <td>{item.address}</td>
          <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link></td>
         <span onClick={()=>this.delete(item.id)}> <FontAwesomeIcon icon={faTrash} color="orange"/></span>
        </tr>
             
              )
             }
             </Table>
        </div>
        :<p>please wait...</p>
      }
     </div>
    );
  }
}