"use client"
import { useState } from "react"
//components
import UsersChat from "@/components/UsersChat"
//custome hooks
import useWidth from "@/hooks/useWidth"

const ChatPage = () => {
  const {width} =useWidth()
  const [isShowUsers, setIsShowUsers] = useState<boolean>(false)
  return (
    <section className="flex w-full h-screen">
      <UsersChat width={width} isShowUsers={isShowUsers} setIsShowUsers={setIsShowUsers}/>
      <div className="bg-bg-main dark:bg-icon-dark w-full hidden lg:flex lg:items-center lg:justify-center ">
        <p className="dark:text-white">لطفا یک چت را انتخاب کنید</p>
      </div>
    </section>
  )
}

export default ChatPage