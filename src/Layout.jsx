import { IconButton, Flex, Spacer, Center, Text, Box, Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from "@chakra-ui/react"
import { useState } from 'react'
import {FaHome, FaVoteYea} from "react-icons/fa"

import Home from "./pages/Home";
import Latarnik from "./pages/Latarnik";

function DescIconButton({icon, description}){
  return (
    <Flex direction="column" gap="3px">
      <IconButton
        variant='outline'
        aria-label={description}
        fontSize='20px'
        icon={icon}
      />
      <Text>{description}</Text>
    </Flex>
  )
}

function Layout(){

  return(
    <Center>
      <Tabs position="relative" variant="unstyled">

        <TabPanels>
          <TabPanel>
              <Home />
          </TabPanel>
          <TabPanel>
              <Latarnik />
          </TabPanel>
        </TabPanels>

        
        <TabList>
          <Tab><DescIconButton icon={<FaHome />} description={"Home"} /></Tab>
          <Tab><DescIconButton icon={<FaVoteYea/>} description={"Quiz"} /></Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="brand.100"
          borderRadius="1px"
        />
    </Tabs>
  </Center>
    
  )
}

export default Layout