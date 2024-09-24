import axios from 'axios'

import './App.css'

function App() {

  const apiCall =()=>{
    axios.get('http://localhost:9000').then((data)=>{
      console.log(data)
    })

    }
  
 

  return (
    <div>
     <button onClick={apiCall}> Make API Call</button>
       
    </div>
  )
}

export default App
