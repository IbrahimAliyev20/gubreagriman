"use client";

import React from "react";
import ProductList from "../ProductList";

interface AkarisidlerProps {
  categorySlug: string;
}

export default function Akarisidler({ categorySlug }: AkarisidlerProps) {
  return <ProductList categorySlug={categorySlug} />;
}
