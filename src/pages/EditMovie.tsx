// src/pages/EditMovie.tsx
import React, { useState, useEffect, FormEvent } from "react";
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    NumberInput,
    NumberInputField,
    HStack,
    Button,
    useToast,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import type { Movie, Genre } from "@/types/movie";
import { GENRES } from "@/types/movie";

interface Props {
    movies: Movie[];
    onSave: (movie: Movie) => void;
}

const EditMovie: React.FC<Props> = ({ movies, onSave }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const toast = useToast();

    const movie = movies.find((m) => m.id === Number(id));
    // local form state
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState<Genre>("Боевик");
    const [duration, setDuration] = useState(0);
    const [description, setDescription] = useState("");
    const [fileName, setFileName] = useState<string | null>(null);

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
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            // you can also store file object if you plan to upload…
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSave({
            ...movie,
            title: title.trim(),
            genre,
            duration,
            description: description.trim(),
            // optionally update imageUrl if you handle uploads…
        });
        toast({
            status: "success",
            title: "Сохранено",
            description: `Фильм «${title}» обновлен.`,
            duration: 2000,
            isClosable: true,
        });
        navigate(`/movies/${movie.id}`);
    };

    return (
        <Box maxW="1200px" mx="auto" px={4} py={6}>
            <Heading mb={6}>Редактировать фильм</Heading>
            <Box
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                p={{ base: 4, md: 8 }}
            >
                <form onSubmit={handleSubmit}>
                    <HStack
                        spacing={8}
                        align="start"
                        flexDirection={{ base: "column", md: "row" }}
                    >
                        <Box flex="0 0 200px">
                            <FormControl mb={4}>
                                <FormLabel>Название фильма</FormLabel>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Жанр</FormLabel>
                                <HStack spacing={4}>
                                    {GENRES.map((g) => (
                                        <Button
                                            key={g}
                                            size="sm"
                                            variant={genre === g ? "solid" : "outline"}
                                            colorScheme="gray"
                                            onClick={() => setGenre(g)}
                                        >
                                            {g}
                                        </Button>
                                    ))}
                                </HStack>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Длительность</FormLabel>
                                <HStack>
                                    <NumberInput
                                        min={1}
                                        value={duration}
                                        onChange={(_, v) => setDuration(v)}
                                    >
                                        <NumberInputField w="80px" />
                                    </NumberInput>
                                    <Box>мин</Box>
                                </HStack>
                            </FormControl>
                        </Box>

                        <Box flex="1">
                            <FormControl mb={4}>
                                <FormLabel>Описание</FormLabel>
                                <Textarea
                                    rows={6}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormControl>

                            <FormControl mb={6}>
                                <FormLabel>Загрузить фото</FormLabel>
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

                            <Button colorScheme="blue" type="submit">
                                Сохранить
                            </Button>
                        </Box>
                    </HStack>
                </form>
            </Box>
        </Box>
    );
};

export default EditMovie;
