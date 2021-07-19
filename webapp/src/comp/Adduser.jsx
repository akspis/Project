import React,{useState} from 'react'
import "../App.css";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

 function Adduser() {
    const [user, setuser] = useState({
        name:"",
        email:"",
        phone:"",
        city:""
      });
   const history = useHistory();
   const AddUserData = ()=>{
       const newUser = {
        name: user.name,
        email:user.email,
        phone:user.phone,
        city:user.city,
        }
       axios.post("http://localhost:5000/insert",newUser);
       history.push('/'); 
       }  
   

   const changeData =(e)=>{
       setuser({...user,[e.target.name]: e.target.value});
   }

    return (
        <div className="AddUser">
        <form >
            <input type="text" name="name" onChange={changeData}  placeholder="Enter Name"/><br/>
           
            <input type="text" name="email" onChange={changeData}  placeholder="Enter Email" /><br />
            
            <input type="text" name="phone" onChange={changeData}  placeholder="Enter Phone"/><br />
            
            <input type="text" name="city" onChange={changeData}  placeholder="Enter City"/><br />
            <button onClick={AddUserData}>AddUser</button>
        </form>
        </div>
    )
}
 
export default Adduser;