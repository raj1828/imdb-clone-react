import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Card } from './Components/Card/Card';
import MovieList from './Components/movieList/movieList';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Movie Deatil Page</h1>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
