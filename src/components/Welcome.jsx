import React,{useState, useEffect} from 'react';
import './Welcome.css'

const Welcome = () =>{

    const [username, setUsername] = useState('');
    var isName;

    useEffect(()=>{
        // setUsername(prompt('Please enter your name'));
        var name = prompt('Please enter your name');
        if(name !==""){
            name = name.toUpperCase()+ "'S LIST";
            setUsername(name);
            isName = true;
        } else{
            name="MY LIST";
            setUsername(name);
            isName = false;
        }
        
      },[]);
    return(
        <div>
           <h2 className="welcome__username">{username}</h2>
        </div>
    );
}

export default Welcome;