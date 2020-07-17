import React from "react"
import { useRef, useEffect } from "react"

import gsap from "gsap"

const Yoyo = ({ children }) => {
  const yoyoRef = useRef(null)

  useEffect(() => {
    gsap.to(yoyoRef.current, {
      duration: 0.5,
      y: 10,
      //   ease: "power2.out",
      repeat: -1,
      repeatDelay: 0,
      yoyo: true,
      yoyoEase: "none",
    })
  }, [])
  return <div ref={yoyoRef}>{children}</div>
}

export default Yoyo
