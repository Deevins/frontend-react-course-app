import React from "react";
import {Box, Flex, Heading, Button, Stack} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import type { Movie } from "@/types/movie";
import {FavoriteItem} from "@/components/Favorite/FavoriteItem.tsx";

interface Props {
    movies: Movie[];
    onToggle: (id: number) => void;
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
                <Button as={NavLink} to="/" colorScheme="blue">
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

            <Stack spacing={0}>
                {favs.map((movie) => (
                    <FavoriteItem
                        key={movie.id}
                        movie={movie}
                        onRemove={onToggle}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default Favorites;