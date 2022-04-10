import './App.css';
import Header from "./companets/Header";
import {Routes, Route} from "react-router-dom";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Latest from "./pages/Latest";
import Upcoming from "./pages/Upcoming";
import NowPlaying from "./pages/NowPlaying";
import MovieDetals from "./pages/MovieDetals";
import ActorInfo from "./pages/ActorInfo";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
<Header/>
<Routes>
    <Route path="/" element={<Popular/>}/>
    <Route path="/toprated" element={<TopRated/>}/>
    <Route path="/latest" element={<Latest/>}/>
    <Route path="/upcoming" element={<Upcoming/>}/>
    <Route path="/nowplaying" element={<NowPlaying/>}/>
    <Route path="/detals/:movieId" element={<MovieDetals/>}/>
    <Route path="/detals/person/:actorId" element={<ActorInfo/>}/>
    <Route path="/search-results/:name" element={<SearchResults/>}/>

</Routes>
    </div>
  );
}

export default App;
