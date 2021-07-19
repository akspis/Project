import React,{useState} from 'react'
import "../App.css";
import {useHistory} from "react-router-dom";
import axios from "axios";

 function Adduser(props) {
    
    const [user, setuser] = useState({
        name:"",
        email:"",
        phone:"",
        city:""
      })
   const history = useHistory();

   const AddUserData = (e)=>{
       e.preventDefault();
       const newUser = {
        name: user.name,
        email:user.email,
        phone:user.phone,
        city:user.city,
        }
       axios.post("http://localhost:5000/insert",newUser)
       console.log(newUser)
       history.push('/');   
   }

   const changeData =(e)=>{
       setuser({...user,[e.target.name]: e.target.value});
       console.log(e.target.value)
   }
    return (
        <div className="form">
           
            <label>Name</label>
            <input type="text" name="name" onChange={changeData} /><br />
            <label>Email</label>
            <input type="text" name="email" onChange={changeData} /><br />
            <label>Phone</label>
            <input type="text" name="phone" onChange={changeData} /><br />
            <label>City</label>
            <input type="text" name="city" onChange={changeData} /><br />
            <button onClick={AddUserData}>AddUser</button>
        </div>
    )
}
export default Adduser;