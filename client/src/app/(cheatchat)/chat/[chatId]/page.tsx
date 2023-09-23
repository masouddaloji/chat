"use client"
import { useState } from "react"
//components
import Chat from "@/components/Chat"
import ContactDetails from "@/components/ContactDetails"
import SendMassage from "@/components/SendMassage"
//custome hooks
import useWidth from "@/hooks/useWidth"
import UsersChat from "@/components/UsersChat"

const SelectChatPage = () => {
    const { width } = useWidth()
    const [isShowUsers, setIsShowUsers] = useState<boolean>(false)

    return (
        <section className="flex w-full h-screen overflow-hidden">
            <UsersChat width={width} isShowUsers={isShowUsers} setIsShowUsers={setIsShowUsers} />
            <div className={` bg-bg-main dark:bg-icon-dark w-full flex flex-col z-10 `}>
                <div className="flex flex-col h-[calc(100%-60px)] md:h-[calc(100%-96px)] w-full pt-10 px-4 lg:px-10 ">
                    <ContactDetails width={width} setIsShowUsers={setIsShowUsers} />
                    <Chat />
                </div>
                <SendMassage />
            </div>
        </section>
    )
}

export default SelectChatPage