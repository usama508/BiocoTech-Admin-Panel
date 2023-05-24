import { AuthProvider } from '../context/AuthContext'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>

        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>

  )
}

export default MyApp
