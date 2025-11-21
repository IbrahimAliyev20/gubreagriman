import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/shared/container";
import ProductTabsSec from "@/components/products/ProductTabsSec";
import ProductBanner from "@/components/products/ProductBanner";
import { getProductBySlug } from "@/utils/productDetails";

interface ProductDetailPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <ProductBanner />
        <ProductTabsSec selectedProduct={product} />
      </div>
    </Container>
  );
}

