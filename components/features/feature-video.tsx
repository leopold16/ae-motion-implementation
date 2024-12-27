"use client"

import { useEffect, useRef } from 'react'

interface FeatureVideoProps {
  src: string
}

export function FeatureVideo({ src }: FeatureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Load metadata first
      video.load()
      
      // Set up playback options for better mobile compatibility
      video.setAttribute('playsinline', '')
      video.setAttribute('webkit-playsinline', '')
      
      // Preload the video
      video.preload = 'auto'

      // Attempt to play
      const playVideo = async () => {
        try {
          await video.play()
        } catch (err) {
          console.log('Autoplay prevented:', err)
          // Add click-to-play fallback if needed
          video.addEventListener('click', () => {
            video.play()
          })
        }
      }

      playVideo()

      // Clean up
      return () => {
        video.pause()
        video.removeAttribute('src')
        video.load()
      }
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full rounded-lg shadow-2xl object-cover"
      style={{ 
        backgroundColor: 'black',
        minHeight: '300px'
      }}
    >
      <source src={src} type="video/webm" />
      {/* Fallback for browsers that don't support WebM */}
      <source src={src.replace('.webm', '.mp4')} type="video/mp4" />
    </video>
  )
}