import { Box, Center, Text, Button, Flex, Image} from "@chakra-ui/react"

function Social(){
  return(
    <Flex padding="3" direction="column">
      <Text fontSize="27px" color="#193769;" fontWeight="bold">
        Your followed politicians
      </Text>  
      <Box width="320px" height="250px" background="#EBF2FE" borderRadius="2xl" padding='10px'>
        <Image
            borderRadius='full'
            boxSize='50px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
        />
        <Text fontSize="16px" color="#193769;" fontWeight="bold">
            BERKOWICZ Konrad Szczepan
        </Text>
        <Text>
            Congraulations @LulaOfficial, on your election as President of Brazil.  

            I look forward to working with you ot adress pressing global challenges, from food
            security to trade and climate change.
        </Text>
      </Box>
    </Flex>
  )
}
export default Social