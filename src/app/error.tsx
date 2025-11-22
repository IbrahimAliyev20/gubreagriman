'use client'

import { useEffect } from 'react'
import { ErrorBoundary } from '@/components/shared/error-boundary'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error:', error)
    }

    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <ErrorBoundary>
          <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-red-100 rounded-full p-4">
                  <svg
                    className="w-12 h-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Bir xəta baş verdi
              </h1>

              <p className="text-gray-600 mb-6">
                Təəssüf ki, gözlənilməz bir xəta baş verdi. Zəhmət olmasa, bir az sonra yenidən cəhd edin.
              </p>

              {process.env.NODE_ENV === 'development' && (
                <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
                  <p className="text-sm font-semibold text-red-800 mb-2">
                    Xəta məlumatları:
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

              <button
                onClick={reset}
                className="px-6 py-3 bg-[#8BC34A] text-white rounded-lg hover:bg-[#7CB342] transition-colors font-medium"
              >
                Yenidən cəhd et
              </button>
            </div>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  )
}

