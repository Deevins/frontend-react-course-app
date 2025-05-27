import {Box, HStack, Link} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'


const Header = () => (
    <Box as="header" py={4}>
        <HStack spacing={8}>
            <Link
                as={NavLink}
                to="/"
                _activeLink={{color: "blue.500", fontWeight: "bold"}}
            >
                Все фильмы
            </Link>
            <Link
                as={NavLink}
                to="/favorites"
                _activeLink={{color: "blue.500", fontWeight: "bold"}}
            >
                Избранное
            </Link>
            <Link
                as={NavLink}
                to="/add"
                _activeLink={{color: "blue.500", fontWeight: "bold"}}
            >
                Добавить фильм
            </Link>
        </HStack>
    </Box>
);
export default Header