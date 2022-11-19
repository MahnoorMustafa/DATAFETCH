import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import Card from "./Card";
import List from "./LIST";

function Signup(){

    const URL = "https://jsonplaceholder.typicode.com/users"
    const [texts, setText] = useState ("");
    const [email,setEmail] = useState([]);
    const [input, setInput] = useState(false);
    
    function handle(event){
        setText(event.target.value);
     
    }
     useEffect(()=>{axios.get(URL)
        .then(res=>{
            console.log(res.data);
            if (res.data)
            {const Email = res.data.map(updateEmail => updateEmail.email)
            setEmail(Email);}
        })
        .catch(error=>{
            console.log(error);
        })
      },[]);
        
           
        
    

    function updateClick(){
        for(let i =0; i <= email.length; i++){
            if(email[i]=== texts){
                setInput(true);
            }
        }
    }
   

    return(
        <div className="card">
           <form >
           <div className="card1">

           <label>Email</label>
           <input onChange={handle}  type="email" placeholder="Email"/>
   
           <label>Password</label>
           <input onChange={handle} type="text" placeholder="Password"/>

           <label>Confirm Password</label>
           <input onChange={handle} type="text" placeholder="Confirm Password"/>
           <button onClick={updateClick}>SIGN UP!</button>
          

           <p>Not a member?<span>Signup for an account</span></p>
          
            
          
            </div>
          
           </form>
        
            {input === true ?  <Card/>: <List/>}
        </div>
    );
}

export default Signup;