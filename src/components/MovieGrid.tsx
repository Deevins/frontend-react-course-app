import {SimpleGrid} from '@chakra-ui/react'
import MovieCard from './MovieCard'
import {Movie} from "@/types/movie.ts";

interface Props {
    movies: Movie[]
    onToggle: (id: number) => void
}

const MovieGrid = ({movies, onToggle}: Props) => {
    return (
        <SimpleGrid columns={{base: 1, sm: 2, md: 3}} spacing={6} mb={8}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} onToggle={onToggle}/>
            ))}
        </SimpleGrid>
    )
}
export default MovieGrid