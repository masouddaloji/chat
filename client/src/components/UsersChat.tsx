import Link from "next/link"
//icons
import { HiChevronLeft } from "react-icons/hi2"


type UsersChatProps = {
    width: number
    isShowUsers: boolean
    setIsShowUsers: React.Dispatch<React.SetStateAction<boolean>>
}
const UsersChat = ({ width, isShowUsers, setIsShowUsers }: UsersChatProps) => {
    return (
        <aside className={`${width<1024?"absolute w-full top-0 z-30 h-screen":"w-[400px] h-full relative"} ${isShowUsers?"right-0":"-right-full"}  py-4 duration-300  bg-white  dark:bg-black-dark`}>
            {/* start users list  */}
            <div className="flex items center justify-between mb-5 px-3">
                <span className="text-sm text-silver-primary">گفتگوهای اخیر شما 😘</span>
                {width < 1024 && <div className="iconBox bg-silver-primary dark:bg-icon-dark mr-4" onClick={() => setIsShowUsers(false)}>
                        <HiChevronLeft className="text-black-primary dark:text-white" />
                    </div>}
            </div>
            <div className="h-full overflow-x-hidden overflow-y-auto">
                <ul className="flex flex-col  ">
                    {Array(10).fill(0).map((item, index) => (
                        <li className="navbarItem" key={`chat${index + 1}`}>
                            <Link href={`/chat/${index+1}`} className="chatLinks">
                            <span className="navItem__circle"> </span>
                            <div className="flex flex-col flex-grow gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">امیرعلی</span>
                                    <span className="text-xs">01:35 صبح</span>
                                </div>
                                <span className="text-xs">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
                            </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* end users list  */}



        </aside>
    )
}

export default UsersChat