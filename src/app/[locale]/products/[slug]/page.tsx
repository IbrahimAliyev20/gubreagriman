import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/shared/container";
import ProductTabsSec from "@/components/products/ProductTabsSec";
import ProductBanner from "@/components/products/ProductBanner";
import { getProductDetail } from "@/services/Product/api";
import { ApiResponse, ProductDetail } from "@/types/types";
import CaruselLogo from "@/components/shared/carusel-logo";

interface ProductDetailPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  
  try {
    const response = await getProductDetail(slug);
    
    // API response'unu kontrol et
    if (!response || !response.data) {
      notFound();
    }

    const product: ProductDetail = response.data;

    return (
      <Container>
        <div className="flex flex-col gap-10">
          <ProductBanner />
          <ProductTabsSec selectedProduct={product} />

          <CaruselLogo />
        </div>
      </Container>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound();
  }
}

