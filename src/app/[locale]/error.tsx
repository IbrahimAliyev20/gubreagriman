'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { ErrorBoundary } from '@/components/shared/error-boundary'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('error')
  const router = useRouter()

  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Locale error:', error)
    }

    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error)
  }, [error])

  const handleGoHome = () => {
    router.push('/')
    reset()
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 rounded-full p-4">
              <AlertCircle className="w-12 h-12 text-red-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t('title')}
          </h1>

          <p className="text-gray-600 mb-6">
            {t('description')}
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
              <p className="text-sm font-semibold text-red-800 mb-2">
                {t('errorDetails')}:
              </p>
              <p className="text-xs text-red-700 font-mono break-all">
                {error.message || error.toString()}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={reset}
              variant="default"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              {t('tryAgain')}
            </Button>

            <Button
              onClick={handleGoHome}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              {t('goHome')}
            </Button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

