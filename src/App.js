import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link} from 'react-router-dom'

import OrderSumPage from "./components/OrderSumPage";
import CustomerProfile from "./components/CustomerProfile";

const userStyleProfile = {
    textDecoration: 'none', 
    color: 'hsl(204, 23.8%, 95.9%)', 
    backgroundColor: 'rgb(184, 46, 46)',
    fontSize: '14px',
    borderRadius: '20px',
    padding: '10px'
}

function App() {

  const [data, setData] = useState([]);

  // fetchData function that fetches users and order summary data
  const fetchData = async () =>{    
    try{
        const response = await axios.get('https://indapi.kumba.io/webdev/assignment');
        const { data } = await response;
        setData(data)
    }catch(err){
        console.log(err)
    }
  }

  //Making the fetchData function api to be call once
  useEffect(()=>{
    fetchData()

  }, []);


  return (
    <div className="App">
      <header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li> <Link to="/order-summary-page/userProfile" style={ userStyleProfile}>Visit user profile</Link></li>
        </ul>
      </header>
      

      <Route exact path="/order-summary-page">
        <OrderSumPage data={data}/>
      </Route>

      <Route exact path="/order-summary-page/userProfile">
        <CustomerProfile userData={data}/>
      </Route>
     
    </div>
  );
}

export default App;
