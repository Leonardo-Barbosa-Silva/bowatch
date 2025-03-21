import './App.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Bowatch" defaultTitle="Bowatch" />

      <Toaster richColors closeButton />
    </HelmetProvider>
  )
}

export default App
