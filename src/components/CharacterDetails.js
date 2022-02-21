import React from 'react';

export default function CharacterDetails(props) {
  return (
    <>
      <h1>{props.characterName}</h1>
      <img className="character-portrait" src={props.characterImage} alt={props.imageAltText} />
      <h2>Appears in:</h2>
      <ul className="appearances">
        <li>
          <span>Films: </span>
          <span>
            {
              props.films.map(film => (
                <span key={film}>{film}</span>
              ))
            }
          </span>
        </li>
        <li>
          <span>Short Films: </span>
          <span>
            {
              props.shortFilms.map(shortFilm => (
                <span key={shortFilm}>{shortFilm}</span>
              ))
            }
          </span>
        </li>
        <li>
          <span>TV Shows: </span>
          <span>
            {
              props.shows.map(show => (
                <span key={show}>{show}</span>
              ))
            }
          </span>
        </li>
        <li>
          <span>Video Games: </span>
          <span>
            {
              props.games.map(game => (
                <span key={game}>{game}</span>
              ))
            }
          </span>
        </li>
        <li>
          <span>Park Attractions: </span>
          <span>
            {
              props.parkAttractions.map(attraction => (
                <span key={attraction}>{attraction}</span>
              ))
            }
          </span>
        </li>
      </ul>
    </>
  )
}
