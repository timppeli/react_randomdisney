import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterDetails from './components/CharacterDetails';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const API_URL = "https://api.disneyapi.dev/characters/";
  const CHARACTER_TOTAL = 7438;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [characterImage, setCharacterImage] = useState("");
  const [imageAltText, setImageAltText] = useState("Character Portrait");
  const [films, setFilms] = useState([]);
  const [shortFilms, setShortFilms] = useState([]);
  const [shows, setShows] = useState([]);
  const [games, setGames] = useState([]);
  const [parkAttractions, setParkAttractions] = useState([]);

  /**
   * 
   * @returns a random integer for a character ID
   */
  function getRandomCharacterId() {
    return Math.floor(Math.random() * (CHARACTER_TOTAL - 0) + 0);
  }

  useEffect(() => {
    const CHARACTER_ID = getRandomCharacterId();
    axios.get(API_URL + CHARACTER_ID)
      .then((response) => {
        setCharacterName(response.data.name);
        setCharacterImage(response.data.imageUrl);
        setImageAltText("Portrait of " + response.data.name);
        setFilms(response.data.films);
        setShortFilms(response.data.shortFilms);
        setShows(response.data.tvShows);
        setGames(response.data.videoGames);
        setParkAttractions(response.data.parkAttractions);
        setIsLoaded(true);
      }).catch(error => {
        setError(error)
        alert("An error occurred. Please try again.");
      });
  }, [])

  function showCharacter() {
    const CHARACTER_ID = getRandomCharacterId();
    axios.get(API_URL + CHARACTER_ID)
      .then((response) => {
        setCharacterName(response.data.name);
        setCharacterImage(response.data.imageUrl);
        setImageAltText("Portrait of " + response.data.name);
        setFilms(response.data.films);
        setShortFilms(response.data.shortFilms);
        setShows(response.data.tvShows);
        setGames(response.data.videoGames);
        setParkAttractions(response.data.parkAttractions);
      }).catch(error => {
        setError(error)
        alert("An error occurred. Please try again.");
      });
  }

  if (!isLoaded) {
    return (
      <div className="wrapper">
        <Header />
        <div className="container text-center p-3">
          <button className="btn btn-primary" onClick={showCharacter}>Show another random character</button>
        </div>
        <div className="container">
          Loading...
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <Header />
        <Home />
        <div className="container text-center p-3">
          <button className="btn btn-primary" onClick={showCharacter}>Show another random character</button>
        </div>
        <div className="container d-flex flex-column align-items-start gap-3">
          <CharacterDetails
            characterName={characterName}
            characterImage={characterImage}
            imageAltText={imageAltText}
            films={films}
            shortFilms={shortFilms}
            shows={shows}
            games={games}
            parkAttractions={parkAttractions}
          />
        </div>
      </div>
    );
  }
}

export default App;
