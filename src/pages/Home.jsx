import { Box, Center, Text, Button, Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Flex direction="column" gap="5">
      <Box background="#EBF2FE;" borderRadius="2xl" padding="5" boxShadow="xl">
        <Text fontSize="16px" color="#193769;">
          Elections to the European Parliament in <b>2137 days</b>
        </Text>
        <Box background="#FFFFFF" borderRadius="2xl">
          <Text fontSize="13px">
            12 of your friends declared that they will vote
          </Text>
        </Box>
      </Box>

      <Box
        background="#FFFFFF"
        border="1px"
        borderRadius="2xl"
        borderColor="#193769;"
        padding="5"
        boxShadow="lg"
      >
        <Text fontSize="17px" color="#193769;">
          Did you know...
        </Text>
        <Text
          fontSize="14px"
          color="#464646;
"
        >
          you can vote online or stationary at electoral district
        </Text>
      </Box>

      <Box
        background="#FFFFFF"
        border="1px"
        borderRadius="2xl"
        borderColor="#193769;"
        padding="5"
        boxShadow="lg"
        
      >
        <Text fontSize="18px" color="#193769;">
          Zadupie Bottom
        </Text>
        <Text fontSize="13px" color="#193769;">
          Your electoral district
        </Text>
        <Box background="#183E7A" borderRadius="lg" color="#FFFFFF" align='center' padding="2">
          <Text fontSize="12px">Change your voting place</Text>
          <Text fontSize="10px">for stationary voting</Text>
        </Box>
      </Box>

      <Box background="#FFFFFF" border="1px" borderColor="#193769;" borderRadius="2xl" boxShadow="lg" padding="5" align='center' >
        
        <Text color="#193769;" >
          You don’t know who to vote for?
        </Text>
        <Box background="#183E7A" borderRadius="lg" color="#FFFFFF" padding="2">
          <Text fontSize="24px">QUIZ</Text>
        </Box>
      </Box>
    </Flex>
  );
}
export default Home;
