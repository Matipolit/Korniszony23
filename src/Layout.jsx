import { IconButton, Flex, Spacer, Center, Text, Box, Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from "@chakra-ui/react"
import { useState } from 'react'
import {FaPeopleArrows, FaRegIdCard, FaHome, FaVoteYea} from "react-icons/fa"
import {PiLighthouseFill} from "react-icons/pi"
import { useEffect } from 'react';

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

const titles = ["Friends", "Profile", "Home", "Voting", "Meet the candidates"]

function Layout(){

  const [index, setIndex] = useState(2);
  const [title, setTitle] = useState(titles[index]);

  useEffect(() => {
    setTitle(titles[index]);
  }, [index]);


  return(
    <Box>
      <Text fontSize="xx-large" fontWeight="bold">{title}</Text>
      {index == 2 ? <Home /> : index == 3 ? <Vote /> : index == 4 ? <Candidates /> : <></>}
      <BottomNavigation
        value={index}
        onChange={(newIndex) => {
          setIndex(newIndex);
        }}
        colorScheme="brand"
        variant="float"
        showLabel="if-active"
      >

      <BottomNavigationItem>
        <BottomNavigationIcon as={FaPeopleArrows} />
        <BottomNavigationLabel>Social</BottomNavigationLabel>
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
        <BottomNavigationLabel>Vote</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem>
        <BottomNavigationIcon as={PiLighthouseFill} />
        <BottomNavigationLabel>Candidates</BottomNavigationLabel>
      </BottomNavigationItem>
    </BottomNavigation>
  </Box>

      /*
      <Flex height="calc(100hv)" direction="column">
        <Spacer />
        <Tabs  variant="unstyled">
          <TabPanels>
            <TabPanel>
                <Home />
            </TabPanel>
            <TabPanel>
                <Latarnik />
            </TabPanel>
          </TabPanels>

            <TabList>
              <Tab><DescIconButton icon={<FaPeopleArrows/>} description={"Social"} /></Tab>
              <Tab><DescIconButton icon={<FaRegIdCard/>} description={"Profile"} /></Tab>
              <Tab><DescIconButton icon={<FaHome />} description={"Home"} /></Tab>
              <Tab><DescIconButton icon={<FaVoteYea/>} description={"Quiz"} /></Tab>
              <Tab><DescIconButton icon={<PiLighthouseFill/>} description={"Quiz"} /></Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="3px"
              bg="brand.100"
              borderRadius="1px"
            />
      </Tabs>
    </Flex>
    */
    
  )
}

export default Layout