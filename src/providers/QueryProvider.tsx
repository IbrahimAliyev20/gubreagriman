'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface QueryProviderProps {
  children: ReactNode
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        // Increased to 5 minutes to reduce unnecessary API calls
        staleTime: 5 * 60 * 1000, // 5 minutes
        // Cache time: how long inactive queries stay in cache (30 minutes)
        gcTime: 30 * 60 * 1000, // 30 minutes
        // Retry failed requests 2 times
        retry: 2,
        // Retry delay with exponential backoff
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        // Don't refetch on window focus for better UX
        refetchOnWindowFocus: false,
        // Don't refetch on reconnect to reduce API calls
        refetchOnReconnect: false,
      },
      mutations: {
        // Retry failed mutations once
        retry: 1,
        // Retry delay for mutations
        retryDelay: 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export function QueryProvider({ children }: QueryProviderProps) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Show devtools only in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools 
          initialIsOpen={false} 
          position="bottom"
        />
      )}
    </QueryClientProvider>
  )
} 