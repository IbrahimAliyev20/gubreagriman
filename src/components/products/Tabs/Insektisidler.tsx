"use client";

import React from "react";
import ProductList from "../ProductList";

interface InsektisidlerProps {
  categorySlug: string;
}

export default function Insektisidler({ categorySlug }: InsektisidlerProps) {
  return <ProductList categorySlug={categorySlug} />;
}
