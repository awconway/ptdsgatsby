import React from "react"
import { useRef, useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const Reveal = ({ children }) => {
  const revealRef = useRef(null)

  useEffect(() => {
    gsap.from(revealRef.current, {
      opacity: 0,
      // yPercent: 5,
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top center",
        end: "bottom center",
        //appear then disappear
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    })
  }, [])
  return <div ref={revealRef}>{children}</div>
}

export default Reveal
