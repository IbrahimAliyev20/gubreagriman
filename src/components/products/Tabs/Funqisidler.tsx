import React from 'react'
import ProductCard from '../ProductCard'
import { productcard } from '@/utils/productcard'

export default function Funqisidler() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  min-h-[500px]'>
      {productcard.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
