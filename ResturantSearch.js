import React, { Component } from 'react'
import { NavItem } from 'react-bootstrap'
import {Table,Form,Container} from 'react-bootstrap'
import {
  Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
export default class ResturantSearch extends Component {
  constructor(){
    super()
    this.state={
      searchData:null,
      noData:false,
      lastSearch:""
    }
  }
  search(key){
    console.warn(key)
    this.setState({lastSearch:key})
    fetch("http://localhost:3000/resturant?q="+key).then((data)=>{
      data.json().then((resp)=>{
        console.warn("resp",resp)
        if(resp.length>0){
          this.setState({searchData:resp,noData:null})
        }
   else{
         this.setState({noData:true,searchData:null})
       }
        
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
       this.search(this.state.lastSearch)
     })
    })

   
 }
  render() {
    return (
      <Container>
        <h1>Resturant Search</h1>
        
        <Form.Control type="text"onChange={(event)=>this.search(event.target.value)} placeholder="Search" />
        <div>
          {
            this.state.searchData?
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
               this.state.searchData.map((item)=>
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
              :""
          }
          {
            this.state.noData?<h3>No data found</h3>:null
          }
        </div>

      </Container>
    )
  }
}
