import React,{useEffect} from 'react'
import {Link ,useParams} from "react-router-dom";
import "../App.css";
import axios from "axios";

 function UserList(props) {
   const {id} = useParams();
   const {Listofusers,setListOfusers} = props
   useEffect(()=>{
    axios.get("http://localhost:5000/read")
    .then(res =>{
        setListOfusers(res.data);
    })
    .catch(err=>{
        console.log(err)
    })
   },[setListOfusers])

   const deleteUser=(id)=>{
     axios.delete(`http://localhost:5000/del/${id}`)
     .then(()=>{
         setListOfusers(Listofusers.filter(val =>{
             return val._id !== id;
         }))
     })

   }

    return (
        <div>
            <div>
            <Link to="/add">AddUser</Link>
            </div>
         { Listofusers.map(val=>{
               return <div key={val._id}>
                    <p>{val.name}</p>
                    <p>{val.email}</p>
                    <p>{val.phone}</p>
                    <p>{val.city}</p>
                    <Link to={`edit/${val._id}`} >Edit</Link>
                    <button onClick={()=>deleteUser(val._id)}>Delete</button>
                </div>
           })}
           
        </div>
    )
}
export default UserList