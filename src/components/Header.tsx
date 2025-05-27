import { Flex, Text, Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { NavLink, NavLinkProps } from 'react-router-dom'

type NavLinkChakraProps = ChakraLinkProps & NavLinkProps
const RouterLink = (props: NavLinkChakraProps) => <ChakraLink as={NavLink} {...props} />

const Header = () => (
    <Flex as="nav" px={{ base: 4, md: 8 }} py={3} align="center" justify="space-between" borderBottom="1px solid" borderColor="gray.200">
        <Flex gap={{ base: 4, md: 6 }}>
            {['/', '/favorites', '/add'].map((path, idx) => {
                const labels = ['Все фильмы', 'Избранное', 'Добавить фильм'] as const
                return (
                    <RouterLink
                        key={path}
                        to={path}
                        px={2}
                        py={1}
                        _activeLink={{ fontWeight: 'bold', color: 'blue.600' }}
                        _hover={{ textDecoration: 'none', bg: 'gray.100', borderRadius: 'md' }}
                    >
                        {labels[idx]}
                    </RouterLink>
                )
            })}
        </Flex>
        <Text fontSize="lg" fontWeight="bold">Фильмограф</Text>
    </Flex>
)

export default Header