// src/pages/EditMovie.tsx
import React, { useState, useEffect, FormEvent } from "react";
import {
    Box,
    Heading,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    NumberInput,
    NumberInputField,
    FormErrorMessage,
    HStack,
    Button,
    Text,
    Icon,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import type { Movie, Genre } from "@/types/movie";

export const GENRES: Genre[] = ["Боевик", "Триллер", "Комедия", "Драма"];

const colorMap: Record<Genre, string> = {
    Боевик: "orange.500",
    Триллер: "green.500",
    Комедия: "blue.500",
    Драма: "black",
};

interface Props {
    movies: Movie[];
    onSave: (movie: Movie) => void;
}

const EditMovie: React.FC<Props> = ({ movies, onSave }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === Number(id));

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState<Genre>("Боевик");
    const [duration, setDuration] = useState(0);
    const [description, setDescription] = useState("");
    const [fileName, setFileName] = useState<string>("");

    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setGenre(movie.genre);
            setDuration(movie.duration);
            setDescription(movie.description || "");
        }
    }, [movie]);

    if (!movie) {
        return (
            <Box p={4}>
                <Heading size="md">Фильм не найден</Heading>
            </Box>
        );
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (f) setFileName(f.name);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (duration <= 0) return;
        onSave({
            ...movie,
            title: title.trim(),
            genre,
            duration,
            description: description.trim(),
        });
        navigate(`/movies/${movie.id}`);
    };

    return (
        <Box minH="100vh">
            <Box maxW="800px" mx="auto" px={4} py={6}>
                <Box
                    as="form"
                    onSubmit={handleSubmit}
                    bg="white"
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor="gray.200"
                    p={{ base: 6, md: 10 }}
                >
                    <Heading mb={8} textAlign="left">
                        Редактировать фильм
                    </Heading>

                    <Stack spacing={6}>
                        {/* Название */}
                        <FormControl display="flex" alignItems="center">
                            <FormLabel w="150px" mb={0}>
                                Название фильма
                            </FormLabel>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                flex="1"
                            />
                        </FormControl>

                        {/* Жанр */}
                        <FormControl display="flex" alignItems="center">
                            <FormLabel w="150px" mb={0}>
                                Жанр
                            </FormLabel>
                            <HStack spacing={6}>
                                {GENRES.map((g) => {
                                    const isOn = genre === g;
                                    const c = colorMap[g];
                                    return (
                                        <HStack
                                            key={g}
                                            spacing={2}
                                            cursor="pointer"
                                            onClick={() => setGenre(g)}
                                        >
                                            <Box
                                                boxSize="20px"
                                                borderRadius="full"
                                                borderWidth="2px"
                                                borderColor={c}
                                                bg={isOn ? c : "transparent"}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                {isOn && (
                                                    <Icon as={FaCheck} color="white" boxSize="12px" />
                                                )}
                                            </Box>
                                            <Text color="gray.800" fontSize="md">
                                                {g}
                                            </Text>
                                        </HStack>
                                    );
                                })}
                            </HStack>
                        </FormControl>

                        {/* Длительность с валидацией */}
                        <FormControl
                            display="flex"
                            alignItems="center"
                            isInvalid={duration <= 0}
                        >
                            <FormLabel w="150px" mb={0}>
                                Длительность
                            </FormLabel>
                            <HStack>
                                <NumberInput
                                    min={1}
                                    step={1}
                                    value={duration}
                                    onChange={(_, v) => setDuration(v)}
                                >
                                    <NumberInputField w="80px" />
                                </NumberInput>
                                <Text>мин</Text>
                            </HStack>
                            <FormErrorMessage>
                                Введите целое число больше 0
                            </FormErrorMessage>
                        </FormControl>

                        {/* Описание */}
                        <FormControl display="flex" alignItems="flex-start">
                            <FormLabel w="150px" mb={0}>
                                Описание
                            </FormLabel>
                            <Textarea
                                rows={6}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                flex="1"
                            />
                        </FormControl>

                        {/* Загрузить фото */}
                        <FormControl display="flex" alignItems="center">
                            <FormLabel w="150px" mb={0}>
                                Загрузить фото
                            </FormLabel>
                            <HStack spacing={4}>
                                <Button as="label" htmlFor="file-input" variant="outline">
                                    Выбрать файл
                                </Button>
                                <Input
                                    id="file-input"
                                    type="file"
                                    display="none"
                                    onChange={handleFileChange}
                                />
                                {fileName && (
                                    <Box
                                        px={3}
                                        py={1}
                                        borderWidth="1px"
                                        borderRadius="md"
                                        bg="gray.50"
                                    >
                                        {fileName}
                                    </Box>
                                )}
                            </HStack>
                        </FormControl>

                        {/* Сохранить */}
                        <Box textAlign="center" pt={4}>
                            <Button
                                type="submit"
                                colorScheme="blue"
                                size="md"
                                isDisabled={duration <= 0}
                            >
                                Сохранить
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default EditMovie;
