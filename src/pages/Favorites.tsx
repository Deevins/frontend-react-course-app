import React from "react";
import {
    Box,
    Flex,
    Heading,
    Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import type { Movie } from "@/types/movie";
import MovieGrid from "@/components/MovieGrid.tsx";

interface Props {
    movies: Movie[]
    onToggle: (id: number) => void
}

const Favorites: React.FC<Props> = ({ movies, onToggle }) => {
    const favs = movies.filter((m) => m.isFavorite);

    if (favs.length === 0) {
        return (
            <Flex
                minH="60vh"
                justify="center"
                align="center"
                direction="column"
                textAlign="center"
                px={4}
            >
                <Heading size="lg" mb={4}>
                    У вас нет избранных фильмов
                </Heading>
                <Button
                    as={NavLink}
                    to="/"
                    colorScheme="blue"
                >
                    Перейти на «Все фильмы»
                </Button>
            </Flex>
        );
    }

    return (
        <Box>
            <Heading size="xl" mb={6}>
                Избранное
            </Heading>
            <MovieGrid movies={favs} onToggle={onToggle} />
        </Box>
    );
};

export default Favorites;
