import { Box, Text} from '@chakra-ui/react'
import { children } from 'react';

function Rectangle( {children, bg, c, b, bc} ) {
    return(
        <Box background= { bg }
        color= { c }
        borderRadius='lg'
        border = { b}
        borderColor={ bc}
     display='flex'
     overflow='hidden'
        >
            
         <Text
         padding='10px'
         fontSize='27px'
         fontWeight='700'
         >
            {children}</Text>
        </Box>
    )
}

export default Rectangle
