import Home from './Pages/Home';
import logo from './logo.svg';
import MovieDetails from './Pages/MovieDetails';
import MovieSearch from './Pages/MovieSearch'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App-container">
    <Router>                          
      <Routes>
              
              <Route path='/' element={<Home/>} />
              <Route path="/search" element={<MovieSearch />} />     
              <Route path="/movies/:id" element={<MovieDetails />} />           
        </Routes>        
       </Router>
                  
    </div>
  );
}

export default App;
