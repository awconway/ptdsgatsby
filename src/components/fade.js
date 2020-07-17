import React from "react"
import { useRef, useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const Fade = ({ children }) => {
  const fadeRef = useRef(null)

  useEffect(() => {
    gsap.to(fadeRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: fadeRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    })
  }, [])
  return <div ref={fadeRef}>{children}</div>
}

export default Fade
