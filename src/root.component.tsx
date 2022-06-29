import { createTheme, ThemeProvider } from '@mui/material'
import { AppProps } from 'single-spa'
import FeedPage from './components/FeedPage'

const theme = createTheme()

export default function Root(props: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <FeedPage />
    </ThemeProvider>
  )
}