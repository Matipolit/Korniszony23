import { extendTheme } from "@chakra-ui/react"
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    body: `'Rubik', sans-serif`
  },
  colors: {
    brand: {
       100: '#050b15', 200: '#0a1529', 300: '#0f203e', 400: '#132b53', 500: '#193769', 600: '#2755a5', 700: '#4579d3', 800: '#83a6e2', 900: '#c1d2f0'
    },
  },
    components: {
      BottomNavigation,
  },
})

export default theme