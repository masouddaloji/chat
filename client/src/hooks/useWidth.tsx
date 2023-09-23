import { useEffect, useState } from "react"

const useWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth)
    window.addEventListener("resize", resizeHandler)
    return () => window.removeEventListener("resize", resizeHandler)
  }, [window.innerWidth])
  return ({width})
}

export default useWidth