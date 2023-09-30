import { Box, Text, Center} from '@chakra-ui/react'

function Rectangle() {
    return(
        <Box bgGradient='linear-gradient(180deg, #183E7A 0%, #19365C 100%);'
        color='white'
        borderRadius='lg'
        w='303px'
        h='315px'
        display='flex'>
         <Text
         fontSize='27px'
         fontWeight='700'
         >
            Test </Text>
        </Box>
    )
}

export default Rectangle
