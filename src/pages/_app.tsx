import type { AppProps } from 'next/app'
import { PostContextProvider } from '../contexts/postContext'
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PostContextProvider>
        <Component {...pageProps} />
      </PostContextProvider>
      <GlobalStyles />
    </>
  )
  
  
}

export default MyApp
