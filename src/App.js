import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([
    {
      title: "Divergent",
      description:
        "In a futuristic Chicago, society is divided into 5 factions. Abnegation the selfless, Dauntless the brave, Erudite the intelligent, Candor the honest, and Amity the peaceful. When all teenagers reach the age of 16, they must choose to either stay in their faction of birth, or transfer into another faction.",
      posterUrl:
        "https://img.yts.mx/assets/images/movies/Divergent_2014/medium-cover.jpg",
      rate: 3,
    },
    {
      title: "John Wick",
      description:
        "John Wick is a fictional character and the titular protagonist of the neo-noir action thriller film series John Wick, portrayed by Keanu Reeves. John is a legendary hitman who had retired until a gang invades his house, steals his car, and kills the puppy that his late wife Helen had given him.",
      posterUrl:
        "https://fr.web.img4.acsta.net/pictures/14/10/08/11/49/255061.jpg",
      rate: 4,
    },
    {
      title: "Jumanji: The Next Level",
      description:
        "The gang is back but the game has changed. As they return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored, from the arid deserts to the snowy mountains, in order to escape the world's most dangerous game.",
      posterUrl:
        "https://img.yts.mx/assets/images/movies/jumanji_the_next_level_2019/medium-cover.jpg",
      rate: 2,
    },
    {
      title: "Arcane",
      description:
        "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions. Hailee Steinfeld and Kevin Alejandro lend voices to this immersive series based on the lore of Riot Games League of Legends.",
      posterUrl:
        "https://catimage.net/images/2021/11/27/Arcane--League-of-Legends---Season-1-2021-All-Episodes-Free.jpg",
      rate: 5,
    },
  ]);
  const [rateValue, setRateValue] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filtredMovie, setFiltredMovie] = useState(movie);
  const [formDisplay, setFormDisplay] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [moviePosterUrl, setMoviePosterUrl] = useState("");
  const [movieRate, setMovieRate] = useState("");

  useEffect(() => {
    setFiltredMovie(
      movie.filter(
        (el) =>
          el.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          el.rate >= rateValue
      )
    );
  }, [searchValue, rateValue, movie]);

  const handleSubmit = () => {
    setMovie([
      ...movie,
      {
        title: movieTitle,
        description: movieDescription,
        posterUrl: moviePosterUrl,
        rate: movieRate,
      },
    ]);
    setFormDisplay(false);
  };

  return (
    <div className="App">
      {formDisplay ? (
        <AddMovie
          setMovieTitle={setMovieTitle}
          setMoviePosterUrl={setMoviePosterUrl}
          setMovieRate={setMovieRate}
          setMovieDescription={setMovieDescription}
          setFormDisplay={setFormDisplay}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <div className="header">
            <button className="addMovie" onClick={() => setFormDisplay(true)}>
              ADD MOVIE
            </button>
            <Filter
              setSearchValue={setSearchValue}
              setRateValue={setRateValue}
              rateValue={rateValue}
            />
          </div>

          <MovieList filtredMovie={filtredMovie} />
        </>
      )}
    </div>
  );
}

export default App;
