import Carousel from './carousel'
import NewMovies from './new-movies'
import ShareWith from './share';
import Trending from './trending';
import Latest from './latest';

export default function HomePage() {

    const showsUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=3"
    const moviesUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=4"
    const comingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=1"
    const showsMore = "https://api.themoviedb.org/3/trending/tv/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=5"
    const moviesMore = "https://api.themoviedb.org/3/trending/movie/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=6"
    const comingMore = "https://api.themoviedb.org/3/movie/upcoming?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=3"
    return(
    <div className='homepage'>
        <div className='App1'>
            <Carousel/>
            <NewMovies/>
            <ShareWith style='active'/>
        </div>
        <div className='homepage'>
            <ShareWith style='switch'/>
            <Trending/>
            <Latest mode='Latest Movies' urls={moviesUrl} more={moviesMore}/>
            <Latest mode='Latest Shows' urls={showsUrl} more={showsMore}/>
            <Latest mode='Coming soon' urls={comingUrl} more={comingMore}/>
        </div>
    </div>
    )
}