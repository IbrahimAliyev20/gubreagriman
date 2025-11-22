"use client";

import React from "react";
import ProductList from "../ProductList";

interface MineralProps {
  categorySlug: string;
}

export default function Mineral({ categorySlug }: MineralProps) {
  return <ProductList categorySlug={categorySlug} />;
}

