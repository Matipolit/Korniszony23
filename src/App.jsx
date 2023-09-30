import { useState } from 'react'
import { Center, Text, Box } from "@chakra-ui/react"
import Login from './Login';
import Layout from "./Layout"

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Box padding="4" height="calc(100vh)" >
      {
        !loggedIn ? <Login logIn={() => {setLoggedIn(true)}}></Login> :
        <Layout />
      }
      <Box></Box>  
    </Box>
  )
}

export default App
