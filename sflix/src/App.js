
import './App.css';
import Navbar from './components/navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Carousel from './components/carousel'
import NewMovies from './components/new-movies'
import ShareWith from './components/share';
import Trending from './components/trending';

library.add(faCoffee)


function App() {

  return (
    <div className="App">
        <Navbar/>
        <div className='App1'>
          <Carousel/>
          <NewMovies/>
          <ShareWith style='active'/>
        </div>
        <ShareWith style='switch'/>
        <Trending/>

    </div>
  );
}

export default App;
