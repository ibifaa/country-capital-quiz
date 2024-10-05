
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/svg/logo.svg";

function Game() {
    const [score, setScore] = useState(null);
    const [country, setCountry] = useState('');
    const [scoreState, setScoreState] = useState(null);
    
    const navigate = useNavigate()

    const apiCall =(e)=>{
      e.preventDefault();
        axios.post('http://localhost:9000/login', {country})
          .then((response) => {
            console.log(response);  
          })
          .catch((error) => {
            console.error('Error:', error);  
          });
        }


  return (
    <div>
        <h2>{country}</h2>
        <img src={logo} alt="" />
        <form onSubmit={apiCall}>
            <input type="text" placeholder='Enter the correct country Capital' onChange={(event) => setCountry(event.target.value)} value={country} />
            <button type='submit' >Submit</button> 
            <div>
              <button onClick={()=>navigate("/login")}>Login</button>
            </div>
        </form>

      
    </div>
  )
}

export default Game
