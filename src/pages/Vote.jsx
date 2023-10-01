import { Box, Center, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import VoteChoice from "./VoteChoice";

function Vote() {
    const [voting, setVoting] = useState(0);

    return voting == 1 ? (
        <VoteChoice />
    ) : (
        <Flex direction="column" gap="4" alignItems="stretch">
            <Text fontSize="27px" color="#193769;" fontWeight="bold">
                Upcoming elections
            </Text>
            <Text fontSize="23px" color="#193769;">
                Next election is: <b>now</b>
            </Text>

            <Flex alignItems="center" alignContent="stretch" gap="4">
                <Box
                    border="2px"
                    borderRadius="10px"
                    borderColor="#193769;"
                    display="flex"
                    gap="4"
                    alignItems="center"
                    padding="2"
                >
                    <Text fontSize="40px" color="yellow">
                        •
                    </Text>
                    <Text fontSize="20px" color="#193769;">
                        &nbsp;&nbsp;EU Parliament 2024
                    </Text>
                </Box>
                <Button
                    backgroundColor="brand.500"
                    color="white"
                    onClick={() => setVoting(1)}
                >
                    Vote now
                </Button>
            </Flex>

            <Text fontSize="23px" color="#193769;">
                Your votes in previous election:
            </Text>
            <Flex direction="column" gap="2">
                <Flex
                    backgroundColor="white"
                    border="2px"
                    borderColor="#193769;"
                    textAlign="center"
                    padding="2"
                    borderRadius="10px"
                    alignContent="center"
                    alignItems="center"
                >
                    <Text fontSize="40px" color="red">
                        •
                    </Text>
                    <Flex direction="column">
                        <Text fontSize="20px" color="#193769;">
                            &nbsp;&nbsp;EU Parliament 2019
                        </Text>
                        <Text fontSize="10px" color="#193769;">
                            You didn't vote
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    backgroundColor="white"
                    border="2px"
                    borderColor="#193769;"
                    textAlign="center"
                    padding="2"
                    borderRadius="10px"
                    alignContent="center"
                    alignItems="center"
                >
                    <Text fontSize="40px" color="green">
                        •
                    </Text>
                    <Flex direction="column">
                        <Text fontSize="20px" color="#193769;">
                            &nbsp;&nbsp;EU Parliament 2014
                        </Text>
                        <Text fontSize="10px" color="#193769;">
                            &nbsp;&nbsp;You voted for: Samuel Wojciechowski
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
export default Vote;
