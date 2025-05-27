import { HStack, Text, Box } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

// Жанры и цвета
const genres = [
    { label: 'Боевик', color: 'orange.500' },
    { label: 'Триллер', color: 'green.500' },
    { label: 'Комедия', color: 'blue.500' },
    { label: 'Драма', color: 'black' }
]

const FilterTags = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const selected = searchParams.getAll('genre')

    const toggle = (label: string) => {
        const next = selected.includes(label)
            ? selected.filter(l => l !== label)
            : [...selected, label]
        searchParams.delete('genre')
        next.forEach(l => searchParams.append('genre', l))
        setSearchParams(searchParams)
    }

    return (
        <HStack spacing={8} mb={6} justify="flex-end" w="100%">
            {genres.map(({ label, color }) => {
                const isActive = selected.includes(label)
                return (
                    <HStack
                        as="button"
                        key={label}
                        onClick={() => toggle(label)}
                        spacing={3}
                        align="center"
                        cursor="pointer"
                        _focus={{ outline: 'none' }}
                    >
                        <Box
                            w={4}
                            h={4}
                            borderWidth="2px"
                            borderColor={color}
                            borderRadius="full"
                            bg={isActive ? color : 'white'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {isActive && <FaCheck color="white" size={10} />}
                        </Box>
                        <Text fontSize="sm" fontWeight="medium" color={isActive ? color : 'gray.800'}>
                            {label}
                        </Text>
                    </HStack>
                )
            })}
        </HStack>
    )
}

export default FilterTags