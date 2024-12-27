"use client"

import { useEffect, useRef } from 'react'

export function HeroVideo() {
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
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ backgroundColor: 'black' }}
      >
        <source 
          src="https://cdn.prod.website-files.com/674d73b06fb0202f972f9f66/67586123549abc1534a40376_video_page_accueil-transcode.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
    </>
  )
}