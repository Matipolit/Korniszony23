import { Box, Text} from '@chakra-ui/react'
import { children } from 'react';

function Rectangle( {children, w, h}) {
    return(
        <Box bgGradient='linear-gradient(180deg, #183E7A 0%, #19365C 100%);'
        color='white'
        borderRadius='lg'
        w={ w }
        h={ h }
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
