import { useMemo } from 'react'
import MovieGrid from "@/components/MovieGrid.tsx";
import {Movie} from "@/types/movie.ts";

interface Props {
    movies: Movie[]
    onToggle: (id: number) => void
}

const Favorites = ({ movies, onToggle }: Props) => {
    const favList = useMemo(
        () => movies.filter(m => m.isFavorite),
        [movies]
    )

    return <MovieGrid movies={favList} onToggle={onToggle} />
}

export default Favorites