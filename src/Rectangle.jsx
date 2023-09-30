import { Box, Text, Center} from '@chakra-ui/react'

function Rectangle() {
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
            Lorem impsum dolor sit amed twoja stara jdjdjdjdjdj</Text>
        </Box>
    )
}

export default Rectangle
