// src/App.tsx
import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AllMovies from "@/pages/MainPage";
import Favorites from "@/pages/Favorites";
import AddMovie from "@/pages/AddMovie";
import MoviePage from "@/pages/MoviePage";
import EditMovie from "@/pages/EditMovie";

import { Movie, movies as initialMovies } from "@/types/movie";

const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>(initialMovies);

    const toggleFav = (id: number) => {
        setMovies((prev) =>
            prev.map((m) =>
                m.id === id ? { ...m, isFavorite: !m.isFavorite } : m
            )
        );
    };

    const handleSave = (updated: Movie) => {
        setMovies((prev) =>
            prev.map((m) => (m.id === updated.id ? updated : m))
        );
    };

    const handleAdd = (newMovie: Movie) => {
        setMovies((prev) => [...prev, newMovie]);
    };

    return (
        <Box minH="100vh" display="flex" flexDir="column">
            <Header />

            <Box flex="1" maxW="1200px" mx="auto" p={4}>
                <Routes>
                    <Route
                        path="/"
                        element={<AllMovies movies={movies} onToggle={toggleFav} />}
                    />
                    <Route
                        path="/favorites"
                        element={<Favorites movies={movies} onToggle={toggleFav} />}
                    />
                    <Route
                        path="/add"
                        element={<AddMovie onAdd={handleAdd} movies={movies} />}
                    />
                    <Route
                        path="/movies/:id"
                        element={
                            <MoviePage movies={movies} onToggle={toggleFav} />
                        }
                    />
                    <Route
                        path="/movies/:id/edit"
                        element={
                            <EditMovie movies={movies} onSave={handleSave} />
                        }
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Box>
            <Footer/>
        </Box>
    );
};

export default App;
