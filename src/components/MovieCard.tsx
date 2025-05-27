import { Box, Image, Text, HStack, IconButton, Tag } from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {Movie} from "@/types/movie.ts";

interface Props {
    movie: Movie
    onToggle: (id: number) => void
}

export const MovieCard: React.FC<Props> = ({ movie, onToggle }) => {
    const { id, title, genre, duration, imageUrl, isFavorite } = movie;

    return (
        <Box
            position="relative"       // чтобы абсолютная кнопка рассчитывалась от этого бокса
            bg="white"
            boxShadow="md"
            borderRadius="xl"
            overflow="hidden"
        >
            <Image
                src={imageUrl}
                alt={title}
                objectFit="cover"
                w="100%"
                h={{ base: "180px", md: "200px" }}
            />

            <Box p={{ base: 3, md: 4 }}>
                <Text
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="semibold"
                    mb={2}
                >
                    {title}
                </Text>

                <HStack spacing={3} mb={2}>
                    <Tag
                        size="sm"
                        borderRadius="full"
                        colorScheme={
                            genre === "Боевик"
                                ? "red"
                                : genre === "Триллер"
                                    ? "green"
                                    : genre === "Комедия"
                                        ? "blue"
                                        : "gray"
                        }
                    >
                        {genre}
                    </Tag>
                    <Text fontSize="sm" color="gray.600">
                        {duration} мин.
                    </Text>
                </HStack>
            </Box>

            <IconButton
                aria-label={
                    isFavorite ? "Убрать из избранного" : "Добавить в избранное"
                }
                icon={isFavorite ? <AiFillStar /> : <AiOutlineStar />}
                variant="ghost"
                color={isFavorite ? "yellow.400" : "gray.300"}
                position="absolute"
                bottom={{ base: 3, md: 4 }}
                right={{ base: 3, md: 4 }}
                boxSize={{ base: 6, md: 8 }}
                fontSize={{ base: "18px", md: "20px" }}
                zIndex={1}
                onClick={() => onToggle(id)}
            />
        </Box>
    );
};



export default MovieCard