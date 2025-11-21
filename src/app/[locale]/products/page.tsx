import OurServices from '@/components/home/OurServices'
import ProductBanner from '@/components/products/ProductBanner'
import ProductTabsSec from '@/components/products/ProductTabsSec'
import Container from '@/components/shared/container'
import React from 'react'

export default function ProductsPage() {
  return (
    <Container>
        <div className='flex flex-col gap-10'>

       <ProductBanner />
       <ProductTabsSec />
       <OurServices />
        </div>

    </Container>
  )
}
