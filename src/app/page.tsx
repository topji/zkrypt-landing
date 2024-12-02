'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/zkrypt-logo.png"
              alt="ZKrypt Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">ZKrypt</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="https://zkrypt.ai/docs" target="_blank" className="nav-link">Docs</Link>
            <Link href="/roadmap" className="nav-link">Roadmap</Link>
            <Link href="https://x.com/zkrypt_ai" target="_blank" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com/company/zkrypt" target="_blank" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.967v5.701h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.841-1.561 3.038 0 3.6 2.001 3.6 4.601v5.593z" />
              </svg>
            </Link>
            <Link
              href="mailto:info@zkrypt.ai"
              className="nav-link border border-white/20 rounded-full px-6 py-2 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Popup */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-gray-900 p-6 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col space-y-6">
              <Link href="https://zkrypt.ai/docs" target="_blank" className="nav-link text-lg" onClick={() => setIsMenuOpen(false)}>
                Docs
              </Link>
              <Link href="/roadmap" className="nav-link text-lg" onClick={() => setIsMenuOpen(false)}>
                Roadmap
              </Link>
              <div className="flex space-x-4">
                <Link href="https://x.com/zkrypt_ai" target="_blank" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com/company/zkrypt" target="_blank" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.967v5.701h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.841-1.561 3.038 0 3.6 2.001 3.6 4.601v5.593z" />
                  </svg>
                </Link>
              </div>
              <Link 
                href="mailto:info@zkrypt.ai" 
                className="nav-link border border-white/20 rounded-full px-6 py-2 hover:bg-white/10 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 w-screen h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
            style={{ minWidth: '100vw', minHeight: '100vh' }}
          >
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 mix-blend-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white relative [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
            <span className="relative z-10">AI Layer on Bitcoin</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Powered by FHE and Native ZK Proofs
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="relative inline-flex items-center justify-center px-8 py-3 bg-transparent border border-blue-500 rounded-lg overflow-hidden group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="laser-border absolute inset-0"></span>
              <span className="relative text-white group-hover:text-white">Build on Testnet</span>
            </button>
            <button className="relative inline-flex items-center justify-center px-8 py-3 bg-transparent border border-blue-500 rounded-lg overflow-hidden group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="laser-border absolute inset-0"></span>
              <span className="relative text-white group-hover:text-white">Run a node</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

