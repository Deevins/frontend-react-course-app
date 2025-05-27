import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {Heading, Box, Flex} from '@chakra-ui/react'
import FilterTags from '../components/FilterTags'
import MovieGrid from "@/components/MovieGrid.tsx";
import {Movie} from "@/types/movie.ts";

interface Props {
    movies: Movie[]
    onToggle: (id: number) => void
}


export const AllMovies: React.FC<Props> = ({ movies, onToggle }) => {
    const [searchParams] = useSearchParams();
    const selected = searchParams.getAll("genre");

    const filtered = useMemo(
        () =>
            selected.length
                ? movies.filter((m) => selected.includes(m.genre))
                : movies,
        [selected, movies]
    );

    return (
        <Box>
            <Flex justify="space-between" align="center" mb={6}>
                <Heading size="xl">Фильмы</Heading>
                <FilterTags />
            </Flex>
            <MovieGrid movies={filtered} onToggle={onToggle} />
        </Box>
    );
};

export default AllMovies