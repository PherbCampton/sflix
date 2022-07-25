import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Navbar from './components/navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/footer';
import HomePage from "./components/home-page";
import DetailedPage from "./components/detailed-page";

library.add(faCoffee)


function App() {

  return (
    <Router>
      <div className="App">
          <Navbar/>
            <Routes>
             <Route path="/" element={<HomePage/>}/>
             <Route path="/movie/:movieId" element={<DetailedPage/>}/> 
            </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
