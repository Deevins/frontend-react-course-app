import { HStack, Box, Text, Icon } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { GENRES } from "@/types/movie";

const colorMap: Record<string, string> = {
    Боевик: "orange.500",
    Триллер: "green.500",
    Комедия: "blue.500",
    Драма: "black",
};

const FilterTags = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let selected = searchParams.getAll("genre");

    useEffect(() => {
        if (selected.length === 0) {
            const params = new URLSearchParams();
            GENRES.forEach((g) => params.append("genre", g));
            setSearchParams(params);
            selected = params.getAll("genre");
        }
    }, [selected, setSearchParams]);

    const toggle = (genre: string) => {
        const current = searchParams.getAll("genre");
        const isOn = current.includes(genre);
        let next: string[];

        if (isOn) {
            if (current.length === 1) {
                next = current;
            } else {
                next = current.filter((g) => g !== genre);
            }
        } else {
            next = [...current, genre];
        }

        const params = new URLSearchParams();
        next.forEach((g) => params.append("genre", g));
        setSearchParams(params);
    };

    return (
        <HStack spacing={6} w="100%" justify="flex-end">
            {GENRES.map((genre) => {
                const isOn = selected.includes(genre);
                const color = colorMap[genre];
                return (
                    <HStack
                        key={genre}
                        spacing={2}
                        cursor="pointer"
                        onClick={() => toggle(genre)}
                    >
                        <Box
                            boxSize="20px"
                            borderRadius="full"
                            borderWidth="2px"
                            borderColor={color}
                            bg={isOn ? color : "transparent"}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {isOn && <Icon as={FaCheck} color="white" boxSize="12px" />}
                        </Box>
                        <Text color={isOn ? color : "gray.800"} fontWeight="medium">
                            {genre}
                        </Text>
                    </HStack>
                );
            })}
        </HStack>
    );
};

export default FilterTags;