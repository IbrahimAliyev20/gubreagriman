"use client";

import React from "react";
import ProductList from "../ProductList";

interface FunqisidlerProps {
  categorySlug: string;
}

export default function Funqisidler({ categorySlug }: FunqisidlerProps) {
  return <ProductList categorySlug={categorySlug} />;
}
