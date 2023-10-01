import { Box, Text, Flex } from "@chakra-ui/react";

function Home() {
    return (
        <Flex direction="column" gap="5" marginBottom="100px">
            <Box padding="3">
                <Text fontSize="27px" color="#193769;">
                    Vote with us!
                </Text>
                <Text fontSize="14px" color="#898989">
                    Good Morning, Alina
                </Text>
            </Box>

            <Box
                background="#EBF2FE;"
                borderRadius="2xl"
                padding="5"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            >
                <Text fontSize="16px" color="#193769;">
                    Elections to the European Parliament in <b>2137 days</b>
                </Text>
                <Box background="#FFFFFF" borderRadius="4" marginTop="2">
                    <Text fontSize="13px" padding="2">
                        <b>12 of your friends</b> declared that they will vote
                    </Text>
                </Box>
            </Box>

            <Box
                background="#FFFFFF"
                border="2px"
                borderRadius="2xl"
                borderColor="#193769;"
                padding="5"
                boxShadow="lg"
            >
                <Text fontSize="17px" color="#193769;">
                    Did you know...
                </Text>
                <Text fontSize="14px" color="#464646;">
                    you can vote <b>online</b> or <b>stationary</b> at electoral
                    district
                </Text>
            </Box>

            <Box
                background="#FFFFFF"
                border="2px"
                borderRadius="2xl"
                borderColor="#193769;"
                padding="5"
                boxShadow="lg"
            >
                <Text fontSize="18px" color="#193769;" as="b">
                    Kraków
                </Text>
                <Text fontSize="13px" color="#193769" marginBottom="1">
                    Your electoral district
                </Text>
                <Box
                    background="#183E7A"
                    borderRadius="lg"
                    color="#FFFFFF"
                    align="center"
                    padding="2"
                >
                    <Text fontSize="12px" as="b">
                        Change your voting place
                    </Text>
                    <Text fontSize="10px">for stationary voting</Text>
                </Box>
            </Box>

            <Box
                background="#FFFFFF"
                border="2px"
                borderColor="#193769;"
                borderRadius="2xl"
                boxShadow="lg"
                padding="5"
                align="center"
            >
                <Text color="#193769;">You don’t know who to vote for?</Text>
                <Text color="#193769" marginBottom="1">
                    <b>Take a quiz!</b>
                </Text>
                <Box
                    background="#183E7A"
                    borderRadius="lg"
                    color="#FFFFFF"
                    padding="2"
                >
                    <Text fontSize="24px" as="b">
                        QUIZ
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}
export default Home;
