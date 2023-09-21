'use client'
import TopContent from '@/components/TopContent'
import WeDoContent from '@/components/WeDoContent'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import { useRef, useState } from 'react'

export default function Home() {
  const scrollRef = useRef(null)

  return (
    <>
      <TopContent scrollRef={scrollRef} />
      <WeDoContent scrollRef={scrollRef} />
      <AboutUs />
      <ContactUs />
    </>
  )
}
