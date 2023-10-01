import {
    IconButton,
    Flex,
    Spacer,
    Center,
    Text,
    Box,
    Tabs,
    TabList,
    Tab,
    TabIndicator,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
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
import Latarnik from "./pages/Latarnik";
import Candidates from "./pages/Candidates";
import Vote from "./pages/Vote";

const titles = ["Friends", "Profile", "Home", "Voting", "Meet the candidates"];

function Layout() {
    const [index, setIndex] = useState(2);
    const [title, setTitle] = useState(titles[index]);

    useEffect(() => {
        setTitle(titles[index]);
    }, [index]);

    return (
        <Box>
            <Text padding="4" fontSize="xx-large" fontWeight="bold">
                {title}
            </Text>
            <Center padding="4">
                {index == 2 ? <Home /> : index == 3 ? <Vote /> : index == 4 ? <Candidates /> : <></>}
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
            >

            <BottomNavigationItem>
              <BottomNavigationIcon as={FaPeopleArrows} />
              <BottomNavigationLabel></BottomNavigationLabel>
            </BottomNavigationItem>

            <BottomNavigationItem>
              <BottomNavigationIcon as={FaRegIdCard} />
              <BottomNavigationLabel></BottomNavigationLabel>
            </BottomNavigationItem>
            <BottomNavigationItem>
              <BottomNavigationIcon as={FaHome} />
              <BottomNavigationLabel></BottomNavigationLabel>
            </BottomNavigationItem>

            <BottomNavigationItem>
              <BottomNavigationIcon as={FaVoteYea} />
              <BottomNavigationLabel></BottomNavigationLabel>
            </BottomNavigationItem>

            <BottomNavigationItem>
              <BottomNavigationIcon as={PiLighthouseFill} />
              <BottomNavigationLabel></BottomNavigationLabel>
            </BottomNavigationItem>

          </BottomNavigation>
        </Box>
    );
}

export default Layout;
