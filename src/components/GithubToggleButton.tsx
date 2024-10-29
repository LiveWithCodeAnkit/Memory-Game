'use client'

import React, { useState } from 'react'
import { Github } from 'lucide-react'

export default function GithubToggleButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleButton = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 flex items-center">
      <a
        href="https://github.com/LiveWithCodeAnkit"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-gray-800 text-white px-4 py-2 rounded-l-full transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        @LiveWithCodeAnkit
      </a>
      <button
        onClick={toggleButton}
        className={`bg-gray-800 text-white p-3 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-0'
        }`}
        aria-label={isOpen ? 'Close GitHub profile' : 'Open GitHub profile'}
        aria-expanded={isOpen}
      >
        <Github size={24} />
      </button>
    </div>
  )
}