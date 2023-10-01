import { Box, Center, Text, Button, Flex} from "@chakra-ui/react"
import { useState } from "react"
import VoteChoice from "./VoteChoice"



function Vote(){
const [voting, setVoting] = useState(0);

  return(voting == 1 ? <VoteChoice/> :


    <Box padding="3">
    <Text fontSize="27px" color="#193769;" fontWeight="bold">
      Upcoming elections
    </Text>
    <Text fontSize="23px" color="#193769;">
      Next election is in: 
      <br></br>
      123 days
    </Text>
    <Button backgroundColor="white" border="2px" borderColor="#193769;" margin="13px" onClick={() => setVoting(1)}>
      <Text fontSize="40px" color="yellow">•</Text>
      <Text fontSize="20px" color="#193769;">
      &nbsp;&nbsp;EU Parliament 2024 
      </Text>
      <Text fontSize="23px" color="#193769;">
        Next election is in: 
        <br></br>
        123 days
      </Text>
      <Button backgroundColor="white" border="2px" borderColor="#193769;" margin="13px" textAlign="center">
        <Text fontSize="40px" color="yellow">•</Text>
        <Text fontSize="20px" color="#193769;">
        &nbsp;&nbsp;EU Parliament 2024 
        </Text>
      </Button>
      <Text fontSize="23px" color="#193769;">
        Your votes in previous election:
      </Text>
      <Button backgroundColor="white" border="2px" borderColor="#193769;" margin="13px" textAlign="center">
        <Text fontSize="40px" color="red">•</Text>
        <Flex direction="column">
          <Text fontSize="20px" color="#193769;">
          &nbsp;&nbsp;EU Parliament 2019
          </Text>
          <Text fontSize="10px" color="#193769;">
          You didn't vote
          </Text>
        </Flex>  
      </Button>
      <br></br>
      <Button backgroundColor="white" border="2px" borderColor="#193769;" margin="13px" textAlign="center">
        <Text fontSize="40px" color="green">•</Text>
        <Flex direction="column">
          <Text fontSize="20px" color="#193769;">
          &nbsp;&nbsp;EU Parliament 2014
          </Text>
          <Text fontSize="10px" color="#193769;">
          &nbsp;&nbsp;You voted for:  Samuel Wojciechowski
          </Text>
        </Flex>
      </Button>
    </Flex>
  )
}
export default Vote