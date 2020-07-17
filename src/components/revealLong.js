import React from "react"
import { useRef, useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const RevealLong = ({ children }) => {
  const revealRef = useRef(null)

  useEffect(() => {
    gsap.from(revealRef.current, {
      opacity: 0,
      // yPercent: 5,
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top center-=50%",
        end: "bottom center",
        //appear then disappear
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    })
  }, [])
  return <div ref={revealRef}>{children}</div>
}

export default RevealLong
