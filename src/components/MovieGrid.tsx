import { SimpleGrid } from '@chakra-ui/react'
import MovieCard from './MovieCard'
import {Movie} from "@/types/movie.ts";

interface Props {
    movies: Movie[]
    onToggle: (id: number) => void
}

const MovieGrid = ({ movies, onToggle }: Props) => (
    <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        spacing={{ base: 4, md: 6, lg: 8 }}
    >
        {movies.map(movie => (
            <MovieCard
                key={movie.id}
                movie={movie}
                onToggle={onToggle}
            />
        ))}
    </SimpleGrid>
)

export default MovieGrid