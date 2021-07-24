import React,{useState} from 'react'
import "../App.css";
import {useHistory,Link} from "react-router-dom";
import axios from "axios";

 function Adduser() {
    const history = useHistory();
    const [user, setuser] = useState({
        name:"",
        email:"",
        phone:"",
        city:""
      });

   const AddUserData = async(e)=>{
       try{
       e.preventDefault();
       const newUser = {
        name: user.name,
        email:user.email,
        phone:user.phone,
        city:user.city,
        }
    await axios.post("http://localhost:5000/insert",newUser)
       history.push("/")    
   }catch(err){
       console.log(err)
   }
}  
   
   const changeData =(e)=>{
       setuser({...user,[e.target.name]: e.target.value});
   }
    return (
        <div className="AddUser">
            
        <form>
            <input type="text" name="name" onChange={changeData}  placeholder="Enter Name" required/><br/>
           
            <input type="text" name="email" onChange={changeData}  placeholder="Enter Email" required/><br />
            
            <input type="number" name="phone" onChange={changeData}  placeholder="Enter Phone" required/><br />
            
            <input type="text" name="city" onChange={changeData}  placeholder="Enter City" required/><br />
            <button onClick={AddUserData}>AddUser</button>
        </form>
        </div>
    )
}
 
export default Adduser;