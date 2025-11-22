import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import { getAcceptLanguageHeader } from '@/lib/utils'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

function createServerClient(locale?: string): AxiosInstance {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (locale) {
    headers['Accept-Language'] = getAcceptLanguageHeader(locale)
  }

  const client = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers,
  })

  // Add response interceptor for error handling
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      // Log error in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Server API Error:', {
          url: error.config?.url,
          method: error.config?.method,
          status: error.response?.status,
          message: error.message,
        })
      }

      // Re-throw the error so it can be handled by the caller
      return Promise.reject(error)
    }
  )

  return client
}

export const serverGet = async <T>(
  url: string,
  locale?: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const client = createServerClient(locale)
    const response = await client.get<T>(url, config)
    return response.data
  } catch (error) {
    // Re-throw with more context
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      throw new Error(
        `Failed to fetch ${url}: ${axiosError.response?.status || axiosError.message}`
      )
    }
    throw error
  }
}

export const serverPost = async <T>(
  url: string,
  data?: unknown,
  locale?: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const client = createServerClient(locale)
    const response = await client.post<T>(url, data, config)
    return response.data
  } catch (error) {
    // Re-throw with more context
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      throw new Error(
        `Failed to post to ${url}: ${axiosError.response?.status || axiosError.message}`
      )
    }
    throw error
  }
}

export const serverApiClient = {
  get: serverGet,
  post: serverPost,
}

export default serverApiClient

