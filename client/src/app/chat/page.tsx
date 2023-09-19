"use client"
import { useEffect, useState } from "react"
//components
import Chat from "@/components/Chat"
import NavbarChat from "@/components/NavbarChat"
import SendMassage from "@/components/SendMassage"
import ContactDetails from "@/components/ContactDetails"

const ChatPage = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [isShowNavbar, setIsShowNavbar] = useState<boolean>(false)

  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth)
    window.addEventListener("resize", resizeHandler)
    return () => window.removeEventListener("resize", resizeHandler)
  }, [window.innerWidth])

  return (
    <section className="flex">
      <NavbarChat width={width} isShowNavbar={isShowNavbar} setIsShowNavbar={setIsShowNavbar} />
      <div className="bg-bg-main dark:bg-icon-dark h-screen w-full flex flex-col lg:w-[calc(100%-15rem)] z-10 ">
        <div className="flex flex-col h-[calc(100vh-60px)] md:h-[calc(100vh-96px)] w-full pt-10 px-4 lg:px-10">
          <ContactDetails width={width} setIsShowNavbar={setIsShowNavbar} />
          <Chat />
        </div>

        <SendMassage />
      </div>
    </section>
  )
}

export default ChatPage