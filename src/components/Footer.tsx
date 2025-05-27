import { Box, Text } from '@chakra-ui/react'


const Footer = () => (
    <Box
        as="footer"
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        bg="gray.900"
        color="white"
        py={6}
        px={8}
        zIndex={10}
    >
        <Text fontSize="sm" textAlign="left">
            Фильмограф
        </Text>
    </Box>
);

export default Footer;