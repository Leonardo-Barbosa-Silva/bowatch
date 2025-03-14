import './utils/i18n'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'sonner'

import { AppProvider } from './contexts/app'
import { ThemeProvider } from './contexts/theme'
import { AppRoutes } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Helmet titleTemplate="%s | Studio" />
        <Toaster
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast:
                '!bg-popover gap-6 border-none shadow font-sans min-h-[60px] min-w-[280px] md:w-[400px] md:right-0',
              content: 'mr-10',
              title: 'text-sm md:text-base text-foreground font-bold',
              description:
                'text-xs md:text-sm text-muted-foreground tracking-wide font-medium',
              closeButton:
                'top-[42%] left-auto right-0 !text-muted-foreground h-fit w-fit p-2 !bg-transparent border-none',
            },
          }}
        />
        <AppProvider>
          <ThemeProvider defaultTheme="light" storageKey="@studio:theme">
            <AppRoutes />
          </ThemeProvider>
        </AppProvider>
      </HelmetProvider>
    </BrowserRouter>
  )
}
