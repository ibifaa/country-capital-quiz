import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from '../pages/Game';
import Login from '../pages/Login';


function RoutesApp() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Game/>}/> 
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default RoutesApp;
