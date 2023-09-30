import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    body: `'Rubik', sans-serif`
  },
  colors: {
    brand: {
      100: "#193769",
      900: "#1a202c",
    },
  },
})

export default theme