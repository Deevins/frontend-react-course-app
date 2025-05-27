export type Genre = 'Боевик' | 'Триллер' | 'Комедия' | 'Драма';

export const GENRES = ["Боевик", "Триллер", "Комедия", "Драма"] as const;

export interface Movie {
    id: number
    title: string
    genre: Genre
    duration: number
    description: string
    imageUrl: string
    isFavorite: boolean
}

export const movies: Movie[] = [
    {
        id: 1,
        title: 'Матрица',
        genre: 'Боевик',
        duration: 136,
        imageUrl: '/src/assets/matrix.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    },
    {
        id: 2,
        title: 'Безумный Макс',
        genre: 'Боевик',
        duration: 88,
        imageUrl: '/src/assets/max.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    },
    {
        id: 3,
        title: 'Джентльмены',
        genre: 'Драма',
        duration: 113,
        imageUrl: '/src/assets/jent.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    },
    {
        id: 4,
        title: 'Отступники',
        genre: 'Триллер',
        duration: 151,
        imageUrl: '/src/assets/ots.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    },
    {
        id: 5,
        title: 'Гладиатор',
        genre: 'Боевик',
        duration: 155,
        imageUrl: '/src/assets/gladi.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    },
    {
        id: 6,
        title: 'Однажды в Голливуде',
        genre: 'Драма',
        duration: 161,
        imageUrl: '/src/assets/holy.png',
        isFavorite: false,
        description: "Loreipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. F"
    },
    {
        id: 7,
        title: 'Предложение',
        genre: 'Комедия',
        duration: 108,
        imageUrl: '/src/assets/suggest.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    },
    {
        id: 8,
        title: 'Малышка на миллион',
        genre: 'Драма',
        duration: 132,
        imageUrl: '/src/assets/mill.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    },
    {
        id: 9,
        title: 'Ларри Краун',
        genre: 'Комедия',
        duration: 98,
        imageUrl: '/src/assets/larry.png',
        isFavorite: false,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nibh euismod, auctor augue eu, consectetur massa. Donec lobortis sapien a augue pulvinar ultrices. Aenean eget est malesuada, gravida diam a, efficitur mauris. Sed eu suscipit nibh. Duis eget egestas ipsum. Aliquam venenatis ex sit amet justo iaculis, eu lacinia massa ullamcorper. Etiam sed euismod dolor. Ut at dolor sed odio ultrices interdum. Suspendisse lacinia sem et felis consequat facilisis. Nunc porta commodo purus, sed varius nulla eleifend ut. Nullam ullamcorper nisi at nisi tincidunt tempus. Fusce lectus enim, blandit eget lectus ut, sagittis feugiat justo. Suspendisse iaculis felis aliquet orci dictum maximus. Suspendisse potenti. Suspendisse sed rutrum lacus, in maximus justo. Suspendisse laoreet rutrum mauris, nec bibendum ante mollis in."
    }
]