
import './App.css';
import Navbar from './components/navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Carousel from './components/carousel'
import NewMovies from './components/new-movies'

library.add(faCoffee)


function App() {

  return (
    <div className="App">
        <Navbar/>
        <Carousel/>
        <NewMovies/>
    </div>
  );
}

export default App;