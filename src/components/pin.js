import React from "react"
import { useRef, useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const Pin = ({ children }) => {
  const pinRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top+=15%",
      end: "bottom 150px",
      pin: pinRef.current,
      pinSpacing: true,
      // markers: true,
    })
  }, [])
  return <div ref={pinRef}>{children}</div>
}

export default Pin
