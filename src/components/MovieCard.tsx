import { Box, Image, Text, HStack, IconButton, Tag } from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {Movie} from "@/types/movie.ts";
import {useNavigate} from "react-router-dom";

interface Props {
    movie: Movie
    onToggle: (id: number) => void
}

export const MovieCard: React.FC<Props> = ({ movie, onToggle }) => {
    const { id, title, genre, duration, imageUrl, isFavorite } = movie;
    const navigate = useNavigate();

    return (
        <Box
            position="relative"
            bg="white"
            boxShadow="md"
            borderRadius="xl"
            overflow="hidden"
            cursor="pointer"
            onClick={() => navigate(`/movies/${id}`)}
        >
            <Image
                src={imageUrl}
                alt={title}
                objectFit="cover"
                w="100%"
                h={{ base: "180px", md: "200px" }}
            />

            <IconButton
                aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
                icon={isFavorite ? <AiFillStar /> : <AiOutlineStar />}
                variant="ghost"
                fontSize={{ base: "20px", md: "24px" }}
                color={isFavorite ? "yellow.400" : "gray.300"}
                position="absolute"
                bottom={{ base: 3, md: 4 }}
                right={{ base: 3, md: 4 }}
                _hover={{ bg: "transparent", color: "yellow.300" }}
                _focus={{ boxShadow: "none" }}
                boxSize={{ base: 8, md: 10 }}
                zIndex={1}
                onClick={(e) => {
                    e.stopPropagation();
                    onToggle(id);
                }}
            />

            <Box p={{ base: 3, md: 4 }}>
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={2}>
                    {title}
                </Text>
                <HStack spacing={3} mb={2} align="center">
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
        </Box>
    );
};



export default MovieCard