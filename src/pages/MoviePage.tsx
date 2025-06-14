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
import {useParams, useNavigate} from "react-router-dom";
import {
    AiFillStar,
    AiOutlineStar,
    AiOutlineClockCircle,
} from "react-icons/ai";
import type {Movie} from "@/types/movie";

interface Props {
    movies: Movie[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const colorMap: Record<string, string> = {
    Боевик: "orange.300",
    Триллер: "green.300",
    Комедия: "blue.300",
    Драма: "gray.400",
};

const MoviePage: React.FC<Props> = ({movies, onToggle, onDelete}) => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) {
        return (
            <Box p={4}>
                <Text>Фильм не найден.</Text>
            </Box>
        );
    }

    return (
        <Box minH="100vh" bg="gray.50">
            <Flex
                maxW="1200px"
                mx="auto"
                px={4}
                py={6}
                direction={{base: "column", md: "row"}}
                gap={8}
            >
                <Image
                    src={movie.imageUrl}
                    alt={movie.title}
                    borderRadius="xl"
                    objectFit="cover"
                    w={{base: "100%", md: "40%"}}
                    h={{base: "auto", md: "400px"}}
                />

                <Box
                    flex="1"
                    bg="white"
                    borderRadius="xl"
                    p={{base: 4, md: 6}}
                >
                    <Flex justify="space-between" align="center" mb={4}>
                        <Heading size="xl">{movie.title}</Heading>
                        <IconButton
                            aria-label={
                                movie.isFavorite
                                    ? "Убрать из избранного"
                                    : "Добавить в избранное"
                            }
                            icon={movie.isFavorite ? <AiFillStar/> : <AiOutlineStar/>}
                            variant="ghost"
                            fontSize="2xl"
                            color={movie.isFavorite ? "yellow.400" : "gray.300"}
                            _hover={{color: "yellow.300"}}
                            _focus={{boxShadow: "none"}}
                            onClick={() => onToggle(movie.id)}
                        />
                    </Flex>

                    <HStack spacing={4} mb={6}>
                        <Tag
                            size="md"
                            bg={colorMap[movie.genre]}
                            color={movie.genre === "Драма" ? "gray.800" : "white"}
                        >
                            {movie.genre}
                        </Tag>
                        <HStack spacing={1} color="gray.600">
                            <AiOutlineClockCircle/>
                            <Text>{movie.duration} мин.</Text>
                        </HStack>
                    </HStack>

                    <Text whiteSpace="pre-line" color="gray.700" mb={8}>
                        {movie.description || "Описание пока недоступно."}
                    </Text>

                    <HStack spacing={4} justify="flex-end">
                        <Button
                            size={{base: "sm", md: "md"}}
                            variant="outline"
                            colorScheme="blue"
                            onClick={() => navigate(`/movies/${movie.id}/edit`)}
                        >
                            Редактировать
                        </Button>
                        <Button
                            size={{base: "sm", md: "md"}}
                            colorScheme="red"
                            onClick={() => {
                                onDelete(movie.id);
                                navigate("/");
                            }}
                        >
                            Удалить
                        </Button>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
};

export default MoviePage;