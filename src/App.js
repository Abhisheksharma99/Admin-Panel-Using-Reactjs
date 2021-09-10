import React from "react";
import { Switch, Route } from "react-router-dom";
import "./components/Style.css";
import {Layout} from "./components/Layout";
import Users from "./components/Users";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Updateuser from "./components/Updateuser";
import EditProduct from "./components/EditProduct";
function App() {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route path='/layout' component={Layout}/>
        <Route path='/home' component={Layout}/>
        <Route path='/products' component={AddProduct}/>
        <Route path='/users' component={Users}/>
        <Route path='/edituser/:id' component={Updateuser}/>
        <Route path='/editproduct' component={EditProduct}/>
      </Switch>
      </main>

      
  );
}
export default App;
