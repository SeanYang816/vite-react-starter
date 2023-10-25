import Layout from 'layouts/Layout'
import { ThemeProvider } from 'providers/ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App
