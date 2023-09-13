'use client'
import TopContent from '@/components/TopContent'
import AnimatedScreen from '@/components/AnimatedScreen'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import { useState } from 'react'

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <>
      {showAnimation && <AnimatedScreen showAnimation={showAnimation} />}
      {!showAnimation && (
        <TopContent
          showAnimation={showAnimation}
          setShowAnimation={setShowAnimation}
        />
      )}
      {showAnimation && <AboutUs />}
      {showAnimation && <ContactUs />}
    </>
  )
}
