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


const App = () => {
    const [movies, setMovies] = useState<Movie[]>(initialMovies)

    const toggleFav = (id: number) => {
        setMovies(prev =>
            prev.map(m => (m.id === id ? {...m, isFavorite: !m.isFavorite} : m))
        )
    }

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
                </Routes>
            </Box>
            <Footer/>
        </Box>
    )
}

export default App