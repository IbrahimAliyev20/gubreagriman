"use client";

import React from "react";
import ProductList from "../ProductList";

interface DamlamaSuvarmaYarpaqProps {
  categorySlug: string;
}

export default function DamlamaSuvarmaYarpaq({ categorySlug }: DamlamaSuvarmaYarpaqProps) {
  return <ProductList categorySlug={categorySlug} />;
}

