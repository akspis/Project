import {useState , useEffect} from "react"
import "../App.css";
import {Link , useParams, useHistory} from "react-router-dom";
import axios from "axios";

 function EditUser() {
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        city:""
      });
   
   const updateUserData = async()=>{
       const newupdatedUser = {
        name: user.name,
        email:user.email,
        phone:user.phone,
        city:user.city,
        }
        await axios.put(`http://localhost:5000/update/${id}`, newupdatedUser);   
       
       }
   
    const loadUser=async()=>{
           const result = await axios.get(`http://localhost:5000/view/${id}`);
           setUser(result.data);  
       }
       useEffect(()=>{
        loadUser();
       },[]);

   const changeViewData =(e)=>{
       setUser({...user,[e.target.name]: e.target.value});

 }
    return (
        <div className="EditUser">
            <div className="link">
                <Link to="/">UserList</Link>
            </div>
            <form>
            
            <input type="text" name="name"  onChange={changeViewData} value={user.name} placeholder="Enter name.."/><br />
           
            <input type="text" name="email" onChange={changeViewData} value={user.email} placeholder="Enter email.."/><br />
           
            <input type="text" name="phone" onChange={changeViewData} value={user.phone} placeholder="Enter Phone.."/><br />
            
            <input type="text" name="city" onChange={changeViewData} value={user.city} placeholder="Enter city.."/><br />
            <button onClick={()=>updateUserData()}>Update</button>
        </form>
        </div>
    )
}
export default EditUser