import { Archivo } from "next/font/google";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { QueryProvider } from "@/providers/QueryProvider";
import { Toaster } from "sonner";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { ErrorBoundary } from "@/components/shared/error-boundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { getSocialLinks } from "@/services/Home/server-api";
import { queryKeys } from "@/lib/query-keys";
import NextTopLoader from "nextjs-toploader";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = (await getMessages()) as Record<string, string>;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: queryKeys.home.socialLinks(locale),
      queryFn: () => getSocialLinks(locale),
    });
  } catch (error) {
    console.error("Error prefetching social links:", error);
  }

  return (
    <html lang={locale}>
      <body className={`${archivo.variable} antialiased`}>
        <NextTopLoader color="#4CA900" height={2} />
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <ErrorBoundary>
                <div className="min-h-screen">
                  <Header />
                  {children}
                  <Footer />
                </div>
                <Toaster position="top-center" richColors />
              </ErrorBoundary>
            </HydrationBoundary>
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
