'use client'
import TopContent from '@/components/TopContent'
import AnimatedScreen from '@/components/AnimatedScreen'
import WeDoContent from '@/components/WeDoContent'
import { useState } from 'react'

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <>
      {showAnimation && <AnimatedScreen />}
      {!showAnimation && (
        <TopContent
          showAnimation={showAnimation}
          setShowAnimation={setShowAnimation}
        />
      )}

      {/* <WeDoContent /> */}
    </>
  )
}
