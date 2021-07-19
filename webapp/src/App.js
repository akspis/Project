import React,{useState} from "react";
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Adduser from "./comp/Adduser";
import EditUser from "./comp/EditUser";
import UserList from "./comp/UserList";
import "./App.css";

function App() {
  const [Listofusers, setListOfusers] = useState([]);
  return (
    <div className="App">
      <Router>
       <div className="navigation">
       <h1>User Data System </h1>
       </div>
        <Switch>
         <Route exact path="/">
           <UserList setListOfusers={setListOfusers} Listofusers={Listofusers}/>
         </Route>
         <Route exact path="/add" >
           <Adduser />
         </Route >
         <Route exact path="/Edit/:id">
           <EditUser/>
         </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
