import React from "react";
import {
    Flex,
    Avatar,
    Box,
    Text,
    Link, Icon, Divider,
} from "@chakra-ui/react";
import {AiOutlineClockCircle} from "react-icons/ai";
import type {Movie} from "@/types/movie";

interface FavoriteItemProps {
    movie: Movie;
    onRemove: (id: number) => void;
}

export const FavoriteItem: React.FC<FavoriteItemProps> = ({movie, onRemove,}) => {
    return (
        <Box>
            <Flex align="center" py={{base: 3, md: 4}}>
                <Avatar
                    size={{base: "lg", md: "xl"}}
                    name={movie.title}
                    src={movie.imageUrl}
                />
                <Box ml={{base: 3, md: 4}}>
                    <Text fontSize={{base: "lg", md: "xl"}} fontWeight="semibold">
                        {movie.title}
                    </Text>
                </Box>
                <Flex flex="1"/>
                <Link
                    fontSize="sm"
                    color="gray.500"
                    onClick={() => onRemove(movie.id)}
                    _hover={{color: "red.500"}}
                >
                    Удалить
                </Link>
            </Flex>

            <Flex
                align="center"
                pb={{base: 3, md: 4}}
                pl={{
                    base: `calc( var(--chakra-sizes-lg) + ${4 * 4}px )`,
                    md: `calc( var(--chakra-sizes-xl) + ${4 * 4}px )`,
                }}
            >
                <Icon
                    as={AiOutlineClockCircle}
                    boxSize={{base: 5, md: 6}}
                    color="gray.600"
                />
                <Text
                    ml={2}
                    fontSize={{base: "sm", md: "md"}}
                    color="gray.600"
                >
                    {movie.duration} мин.
                </Text>
            </Flex>

            <Divider borderColor="gray.200"/>
        </Box>
    );
};