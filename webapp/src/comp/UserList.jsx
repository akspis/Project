import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import "../App.css";
import axios from "axios";

 function UserList(props) {
   const {Listofusers,setListOfusers} = props
   
   useEffect(()=>{
    axios.get("http://localhost:5000/read") 
    .then(res =>{
        setListOfusers(res.data.reverse());
    })
    .catch(err=>{
        alert(err);
    })
   },[setListOfusers]);

   const deleteUser=async(id)=>{
    try{
     axios.delete(`http://localhost:5000/delete/${id}`)
     .then(()=>{
         setListOfusers(Listofusers.filter(val =>{
             return val._id !== id;
         }))
     })
    }
    catch(err){
        console.log(err)
    }
   }

    return (
        <div className="users">
            <div className="navUser">
            <Link to="/add">AddUser</Link>
            </div>
            <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th> 
                    <th>Phone</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
         { Listofusers.map(val=>{
               return <tr key={val._id}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td>{val.city}</td>
                    <td><button className="edit"><Link to={`edit/${val._id}`} >Edit</Link></button></td>
                    <td><button className="del" onClick={()=>deleteUser(val._id)}>Delete</button></td>
                </tr>    
           })}
            </table>
        </div>
    )
}
export default UserList