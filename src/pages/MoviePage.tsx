import React from "react";
import {
    Box,
    Flex,
    Image,
    Heading,
    Tag,
    Text,
    IconButton,
    Button,
    HStack,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import type { Movie } from "@/types/movie";

interface Props {
    movies: Movie[];
    onToggle: (id: number) => void;
}

const colorMap: Record<string, string> = {
    Боевик: "orange.300",
    Триллер: "green.300",
    Комедия: "blue.300",
    Драма: "gray.400",
};

const MoviePage: React.FC<Props> = ({ movies, onToggle }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) {
        return (
            <Box p={4}>
                <Text>Фильм не найден.</Text>
            </Box>
        );
    }

    const { title, genre, duration, imageUrl, isFavorite, description } =
        movie as Movie & { description?: string };

    return (
        <Box maxW="1200px" mx="auto" p={4}>
            <Flex direction={{ base: "column", md: "row" }} gap={8}>
                <Image
                    src={imageUrl}
                    alt={title}
                    borderRadius="xl"
                    objectFit="cover"
                    w={{ base: "100%", md: "400px" }}
                    h={{ base: "auto", md: "400px" }}
                />

                <Box flex="1" position="relative">
                    <Heading mb={4}>{title}</Heading>

                    <HStack spacing={4} mb={4}>
                        <Tag
                            size="md"
                            bg={colorMap[genre]}
                            color={genre === "Драма" ? "gray.800" : "white"}
                        >
                            {genre}
                        </Tag>
                        <HStack spacing={1} color="gray.600">
                            <AiOutlineClockCircle />
                            <Text>{duration} мин.</Text>
                        </HStack>
                    </HStack>

                    <IconButton
                        aria-label={
                            isFavorite ? "Убрать из избранного" : "Добавить в избранное"
                        }
                        icon={isFavorite ? <AiFillStar /> : <AiOutlineStar />}
                        variant="ghost"
                        fontSize="2xl"
                        color={isFavorite ? "yellow.400" : "gray.300"}
                        position="absolute"
                        top="0"
                        right="0"
                        onClick={() => onToggle(movie.id)}
                    />

                    <Box mb={6}>
                        <Text whiteSpace="pre-line">
                            {description || "Описание пока недоступно."}
                        </Text>
                    </Box>

                    <Box w="100%" mt={{ base: 4, md: 6 }} mb={{ base: 6, md: 0 }}>
                        <HStack spacing={4} justify="flex-end">
                            <Button
                                onClick={() => navigate(`/movies/${movie.id}/edit`)}
                                colorScheme="blue"
                                variant="outline"
                                size={{ base: "sm", md: "md" }}
                            >
                                Редактировать
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={() => onToggle(movie.id)}
                                size={{ base: "sm", md: "md" }}
                            >
                                Удалить
                            </Button>
                        </HStack>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default MoviePage