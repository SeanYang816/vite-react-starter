import Layout from './layouts/Layout'
import { CustomThemeProvider } from './providers/ThemeProvider'

function App() {

  return (
    <CustomThemeProvider>
      <Layout />
    </CustomThemeProvider>
  )
}

export default App
