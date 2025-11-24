import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/shared/container";
import ProductTabsSec from "@/components/products/ProductTabsSec";
import ProductBanner from "@/components/products/ProductBanner";
import { HydrationBoundary } from "@/providers/HydrationBoundary";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { 
  getProductDetail, 
  getRelatedProducts,
  getProductCategories 
} from "@/services/Product/server-api";
import { getPartners } from "@/services/Home/server-api";
import { queryKeys } from "@/lib/query-keys";
import CaruselLogo from "@/components/shared/carusel-logo";

interface ProductDetailPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug, locale } = await params;
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: queryKeys.products.detail(slug, locale),
        queryFn: () => getProductDetail(slug, locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.products.related(slug, locale),
        queryFn: () => getRelatedProducts(slug, locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.products.categories(locale),
        queryFn: () => getProductCategories(locale),
      }),
      queryClient.prefetchQuery({
        queryKey: queryKeys.home.partners(locale),
        queryFn: () => getPartners(locale),
      }),
    ]);

    const productData = queryClient.getQueryData<{ data: unknown }>(
      queryKeys.products.detail(slug, locale)
    );

    if (!productData?.data) {
      notFound();
    }

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Container>
          <div className="flex flex-col gap-10">
            <ProductBanner />
            <ProductTabsSec />

            <CaruselLogo />
          </div>
        </Container>
      </HydrationBoundary>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }
}
