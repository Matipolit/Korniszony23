import { Center, Text, Button} from "@chakra-ui/react"
function Login({logIn}){
  return(
    <Button onClick={() => {logIn()}}>Log in</Button>
  )
}
export default Login