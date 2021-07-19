import {useState , useEffect} from "react"
import "../App.css";
import {Link , useParams, useHistory} from "react-router-dom";
import axios from "axios";

 function EditUser() {
    const history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        city:""
      })

   const updateUserData = async()=>{
       const newupdatedUser = {
        name: user.name,
        email:user.email,
        phone:user.phone,
        city:user.city,
        }
        const result= await axios.put(`http://localhost:5000/update/${id}`, newupdatedUser)   
        console.log(result);
        history.push("/")
       }
   
    const loadUser=async()=>{
           const result = await axios.get(`http://localhost:5000/view/${id}`)
           console.log(result)
           setUser(result.data)  
       }
       useEffect(()=>{
        loadUser();
       },[]);

   const changeViewData =(e)=>{
       setUser({...user,[e.target.name]: e.target.value});
 }
    return (
        <div>
            <div >
                <Link to="/">UserList</Link>
            </div>
            <div>
            <label>Name</label>
            <input type="text" name="name"  onChange={changeViewData} value={user.name}/><br />
            <label>Email</label>
            <input type="text" name="email" onChange={changeViewData} value={user.email}/><br />
            <label>Phone</label>
            <input type="text" name="phone" onChange={changeViewData} value={user.phone}/><br />
            <label>City</label>
            <input type="text" name="city" onChange={changeViewData} value={user.city}/><br />
            <button onClick={()=>updateUserData(id)}>save</button>
        </div>
        </div>
    )
}
export default EditUser