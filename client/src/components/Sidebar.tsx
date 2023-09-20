//components
import Navbar from "./Navbar"
//custom hook
import useTheme from "@/hooks/useTheme"


type SidebarProps = {
    width: number
    isShowNavbar: boolean
    setIsShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}
const Sidebar = ({ width, isShowNavbar, setIsShowNavbar }: SidebarProps) => {
    const { theme, setTheme } = useTheme()

    return (
        <aside className={`duration-300 fixed top-0 bottom-0 left-0  ${isShowNavbar ? "w-full z-20" : "w-0"}  lg:relative w-[400px]  h-screen bg-white  flex flex-col justify-between lg:flex-row lg:justify-stretch  dark:bg-black-dark`}>

            <Navbar theme={theme} setTheme={setTheme} />

            {/* start users list  */}
            <div className="overflow-x-hidden overflow-y-auto order-1 lg:order-2 w-[330px]">
                <ul className="flex flex-col h-full py-4">
                    {Array(5).fill(0).map((item,index)=>(
                         <li className="navbarItem" key={`chat${index+1}`}>
                         <span className="navItem__circle"> </span>
                         <div className="flex flex-col flex-grow gap-3">
                         <div className="flex items-center justify-between">
                         <span className="text-sm">امیرعلی</span>
                         <span className="text-xs">01:35 صبح</span>
                         </div>
                         <span className="text-xs">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
                         </div>
                         
                     </li>
                    ))}
                   
                  

                </ul>
            </div>
            {/* end users list  */}



        </aside>
    )
}

export default Sidebar