//import { AuthProvider } from '../context/AuthContext'
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
     <Component {...pageProps} /> 
     {/*<AuthProvider>

       
  </AuthProvider>*/} 
    </QueryClientProvider>

  )
}

export default MyApp
