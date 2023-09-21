'use client'
import TopContent from '@/components/TopContent'
import WeDoContent from '@/components/WeDoContent'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <TopContent />
      <WeDoContent />
      <AboutUs />
      <ContactUs />
    </>
  )
}
