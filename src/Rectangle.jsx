import { Box, Text} from '@chakra-ui/react'
import { children } from 'react';

function Rectangle( {children}) {
    return(
        <Box bgGradient='linear-gradient(180deg, #183E7A 0%, #19365C 100%);'
        color='white'
        borderRadius='lg'
        w='303px'
        h='315px'
     display='flex'
     overflow='hidden'
        >
            
         <Text
         padding='30px'
         fontSize='27px'
         fontWeight='700'
         >
            {children}</Text>
        </Box>
    )
}

export default Rectangle
