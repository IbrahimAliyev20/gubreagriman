import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
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

  return client
}

export const serverGet = async <T>(
  url: string,
  locale?: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const client = createServerClient(locale)
  const response = await client.get<T>(url, config)
  return response.data
}

export const serverPost = async <T>(
  url: string,
  data?: unknown,
  locale?: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const client = createServerClient(locale)
  const response = await client.post<T>(url, data, config)
  return response.data
}

export const serverApiClient = {
  get: serverGet,
  post: serverPost,
}

export default serverApiClient

