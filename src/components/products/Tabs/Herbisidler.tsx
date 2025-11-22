"use client";

import React from "react";
import ProductList from "../ProductList";

interface HerbisidlerProps {
  categorySlug: string;
}

export default function Herbisidler({ categorySlug }: HerbisidlerProps) {
  return <ProductList categorySlug={categorySlug} />;
}
