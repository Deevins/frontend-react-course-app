import './App.css'
import Header from "@/components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import {Movie, movies as initialMovies} from "@/types/movie.ts";
import {Box} from "@chakra-ui/react";
import AllMovies from "@/pages/MainPage.tsx";
import Favorites from "@/pages/Favorites.tsx";
import AddMovie from "@/pages/AddMovie.tsx";
import Footer from "@/components/Footer.tsx";
import MoviePage from "@/pages/MoviePage.tsx";
import EditMovie from "@/pages/EditMovie.tsx";


const App = () => {
    const [movies, setMovies] = useState<Movie[]>(initialMovies)

    const toggleFav = (id: number) => {
        setMovies(prev =>
            prev.map(m => (m.id === id ? {...m, isFavorite: !m.isFavorite} : m))
        )
    }

    const handleSave = (updated: Movie) => {
        setMovies((prev) =>
            prev.map((m) => (m.id === updated.id ? updated : m))
        );
    };

    // const handleAdd = (newMovie: Movie) => {
    //     setMovies((prev) => [...prev, newMovie]);
    // };

    return (
        <Box minH="100vh" display="flex" flexDir="column">
            <Header/>
            <Box flex="1" maxW="1200px" mx="auto" p={4}>
                <Routes>
                    <Route
                        path="/"
                        element={<AllMovies movies={movies} onToggle={toggleFav}/>}
                    />
                    <Route
                        path="/favorites"
                        element={<Favorites movies={movies} onToggle={toggleFav}/>}
                    />
                    <Route path="/add" element={<AddMovie/>}/>
                    <Route path="/movies/:id" element={<MoviePage movies={movies} onToggle={toggleFav} />} />
                    <Route
                        path="/movies/:id/edit"
                        element={
                            <EditMovie
                                movies={movies}
                                onSave={handleSave}
                            />
                        }
                    />
                    <Route
                        path="/add"
                        element={
                            <AddMovie
                                // onAdd={handleAdd}
                            />
                        }
                    />
                </Routes>
            </Box>
            <Footer/>
        </Box>
    )
}

export default App