
import './App.css';
import Navbar from './components/navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Carousel from './components/carousel'
import NewMovies from './components/new-movies'
import ShareWith from './components/share';
import Trending from './components/trending';
import Latest from './components/latest';
import Footer from './components/footer';

library.add(faCoffee)


function App() {
  const showsUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=1"
  const moviesUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=2"
  const comingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=1"

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
        <Latest mode='Latest Movies' urls={moviesUrl}/>
        <Latest mode='Latest Shows' urls={showsUrl}/>
        <Latest mode='Coming soon' urls={comingUrl}/>
        <Footer/>
    </div>
  );
}

export default App;
