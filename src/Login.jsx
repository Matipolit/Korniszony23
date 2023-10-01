import { Box, Flex, Center, Text, Button } from "@chakra-ui/react";

function Login({ logIn }) {
    return (
        <Center>
            <Flex padding="4" gap="4" direction="column">
                <Box>
                    Your friends are already voting!
                    <br />
                    What about you?
                    <br />
                    Change the world with us!
                </Box>
                <Flex gap="2" direction="column">
                    <Button
                        colorScheme="brand"
                        onClick={() => {
                            logIn();
                        }}
                    >
                        Log in
                    </Button>
                    <Button
                        colorScheme="brand"
                        onClick={() => {
                            logIn();
                        }}
                    >
                        Register
                    </Button>
                </Flex>
            </Flex>
        </Center>
    );
}
export default Login;
