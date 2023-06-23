import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Reset.css";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SearchPage from "./components/SearchPage/SearchPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import WatchList from "./components/WatchList/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/my-watch-list" element={<WatchList />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
