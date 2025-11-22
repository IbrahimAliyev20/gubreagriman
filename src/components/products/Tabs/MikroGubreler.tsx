"use client";

import React from "react";
import ProductList from "../ProductList";

interface MikroGubrelerProps {
  categorySlug: string;
}

export default function MikroGubreler({ categorySlug }: MikroGubrelerProps) {
  return <ProductList categorySlug={categorySlug} />;
}

