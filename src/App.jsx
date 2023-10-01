import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Login from "./Login";
import Layout from "./Layout";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Box height="calc(100vh)">
            {!loggedIn ? (
                <Login
                    logIn={() => {
                        setLoggedIn(true);
                    }}
                ></Login>
            ) : (
                <Layout />
            )}
            <Box></Box>
        </Box>
    );
}

export default App;
