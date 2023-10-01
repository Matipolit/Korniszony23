import { Center, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FaPeopleArrows, FaRegIdCard, FaHome, FaVoteYea } from "react-icons/fa";
import { PiLighthouseFill } from "react-icons/pi";
import { useEffect } from "react";

import {
    BottomNavigation,
    BottomNavigationItem,
    BottomNavigationIcon,
    BottomNavigationLabel,
} from "chakra-ui-bottom-navigation";

import Home from "./pages/Home";
import Candidates from "./pages/Candidates";
import Vote from "./pages/Vote";
import Social from "./pages/Social";

const titles = ["Friends", "Profile", "Home", "Voting", "Meet the candidates"];

function Layout() {
    const [index, setIndex] = useState(2);
    const [title, setTitle] = useState(titles[index]);

    useEffect(() => {
        setTitle(titles[index]);
    }, [index]);

    return (
        <Box>
            <Text margin="1rem 0 0 1rem" fontSize="xx-large" fontWeight="bold">
                {title}
            </Text>
            <Center padding="4">
                {index == 2 ? (
                    <Home />
                ) : index == 3 ? (
                    <Vote />
                ) : index == 4 ? (
                    <Candidates />
                ) : (
                    <></>
                )}
            </Center>
            <BottomNavigation
                value={index}
                onChange={(newIndex) => {
                    setIndex(newIndex);
                }}
                colorScheme="brand"
                variant="float"
                showLabel="if-active"
                margin="0"
                bottom="0"
                left="0"
                right="0"
                borderRadius="0"
                fontSize="smaller"
            >
                <BottomNavigationItem>
                    <BottomNavigationIcon as={FaPeopleArrows} />
                    <BottomNavigationLabel>Friends</BottomNavigationLabel>
                </BottomNavigationItem>

                <BottomNavigationItem>
                    <BottomNavigationIcon as={FaRegIdCard} />
                    <BottomNavigationLabel>Profile</BottomNavigationLabel>
                </BottomNavigationItem>
                <BottomNavigationItem>
                    <BottomNavigationIcon as={FaHome} />
                    <BottomNavigationLabel>Home</BottomNavigationLabel>
                </BottomNavigationItem>

                <BottomNavigationItem>
                    <BottomNavigationIcon as={FaVoteYea} />
                    <BottomNavigationLabel>Voting</BottomNavigationLabel>
                </BottomNavigationItem>
                <BottomNavigationItem>
                    <BottomNavigationIcon as={PiLighthouseFill} />
                    <BottomNavigationLabel>Candid.</BottomNavigationLabel>
                </BottomNavigationItem>
            </BottomNavigation>
        </Box>
    );
}

export default Layout;
