import { Box, Image, Text, HStack, IconButton, Tag } from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {Movie} from "@/types/movie.ts";

interface Props {
    movie: Movie
    onToggle: (id: number) => void
}


const MovieCard = ({ movie, onToggle }: Props) => {
    const { id, title, genre, duration, imageUrl, isFavorite } = movie
    return (
        <Box bg="white" boxShadow="md" borderRadius="xl" overflow="hidden">
            <Image
                src={imageUrl}
                alt={title}
                objectFit="cover"
                w="100%"
                h={{ base: '180px', md: '200px' }}
            />
            <Box p={{ base: 3, md: 4 }}>
                <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" mb={2}>{title}</Text>
                <HStack spacing={3} mb={2} align="center">
                    <Tag size="sm" borderRadius="full" colorScheme={
                        genre === 'Боевик' ? 'red' :
                            genre === 'Триллер' ? 'green' :
                                genre === 'Комедия' ? 'blue' : 'gray'
                    }>
                        {genre}
                    </Tag>
                    <Text fontSize="sm" color="gray.600">{duration} мин.</Text>
                </HStack>
                <IconButton
                    aria-label="Favorite"
                    icon={isFavorite ? <AiFillStar /> : <AiOutlineStar />}
                    variant="ghost"
                    position="absolute"
                    top={2}
                    right={2}
                    color={isFavorite ? 'yellow.400' : 'gray.300'}
                    onClick={() => onToggle(id)}
                />
            </Box>
        </Box>
    )
}

export default MovieCard