"use client"
import React, { useEffect } from 'react'
import AboutCard from '@/components/About/AboutCard'

// ==================== About Page ====================
export default function Page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  // ==================== Return ====================
  return (
    <div className="relative isolate px-2 min-h-screen">

      <div className="mx-auto max-w-4xl py-2 pt-8 lg:py-24">

        <div className="text-center">
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl">
          Alia Girls College – Empowering Women Through Education
          </h1>
          <p className="mt-6 text-md sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
          Alia Girls College is dedicated to providing quality education and fostering a nurturing environment where young women can excel academically and personally. Our institution emphasizes holistic development, empowering students with knowledge, skills, and confidence to achieve their dreams.
           
          </p>
        </div>
      </div>
      <AboutCard />
    </div>
  )
}

// ============================================================================