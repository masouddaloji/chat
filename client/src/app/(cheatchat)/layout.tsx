"use client"
//components
import Navbar from "@/components/Navbar"
//custome hook
import useTheme from "@/hooks/useTheme"

const layout = ({children}:{children :React.ReactNode}) => {
    const { theme, setTheme } = useTheme()

  return (
    <section className="w-screen h-screen flex flex-col lg:flex-row">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="w-full lg:w-[calc(100%-70px)] h-[calc(100vh-60px)] lg:h-100vh lg:h-screen order-1 lg:order-2 overflow-y-auto">{children}</div>
    </section>
  )
}

export default layout