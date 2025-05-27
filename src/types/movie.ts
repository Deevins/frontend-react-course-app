export type Genre = 'Боевик' | 'Триллер' | 'Комедия' | 'Драма';

export interface Movie {
    id: number
    title: string
    genre: Genre
    duration: number
    imageUrl: string
    isFavorite: boolean
}

export const movies: Movie[] = [
    { id: 1, title: 'Матрица', genre: 'Боевик', duration: 136, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 2, title: 'Безумный Макс', genre: 'Боевик', duration: 88, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 3, title: 'Джентльмены', genre: 'Драма', duration: 113, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 4, title: 'Отступники', genre: 'Триллер', duration: 151, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 5, title: 'Гладиатор', genre: 'Боевик', duration: 155, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 6, title: 'Однажды в Голливуде', genre: 'Драма', duration: 161, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 7, title: 'Предложение', genre: 'Комедия', duration: 108, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 8, title: 'Малышка на миллион', genre: 'Драма', duration: 132, imageUrl: '/src/assets/gladi.png', isFavorite: false },
    { id: 9, title: 'Ларри Краун', genre: 'Комедия', duration: 98, imageUrl: '/src/assets/gladi.png', isFavorite: false }
]