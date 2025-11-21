import CareerBanner from '@/components/career/CareerBanner'
import CareerContactForm from '@/components/career/CareerContactForm'
import CaruselLogo from '@/components/shared/carusel-logo'
import Container from '@/components/shared/container'
import React from 'react'

export default function CareerPage() {
  return (
    <Container>
      <div className='flex flex-col gap-10'>
        <CareerBanner />
        <CareerContactForm />
     
        <CaruselLogo />
      </div>
    </Container>
  )
}
