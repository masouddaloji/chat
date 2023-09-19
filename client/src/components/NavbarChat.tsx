//components
import NavbarLinks from "./NavbarLinks"
//custom hook
import useTheme from "@/hooks/useTheme"
//icons
import { FaRegUserCircle } from "react-icons/fa"
import { BsMoon, BsSun } from "react-icons/bs"
import { PiChatsDuotone,PiUsers } from "react-icons/pi"

type NavbarChatProps = {
    width: number
    isShowNavbar: boolean
    setIsShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}
const NavbarChat = ({ width, isShowNavbar, setIsShowNavbar }: NavbarChatProps) => {
    const { theme, setTheme } = useTheme()

    return (
        <nav className={`transition-all duration-300 fixed top-0 bottom-0 left-0  ${isShowNavbar ? "w-full z-20" : "w-0"}  lg:relative lg:w-60 h-screen bg-white  py-4 flex flex-col lg:flex-row dark:bg-black-dark`}>
           
           
            {/* start users list  */}
            <div className="overflow-x-hidden overflow-y-auto">
                <ul className="flex flex-col p-5 space-y-5">
                    <li className="navbarItem">
                        <span className="navItem__circle"> </span>
                        <span className="text-sm">امیرعلی</span>
                    </li>
                    <li className="navbarItem">
                        <span className="navItem__circle"> </span>
                        <span className="text-sm">امیرعلی</span>
                    </li>
                    <li className="navbarItem">
                        <span className="navItem__circle"> </span>
                        <span className="text-sm">امیرعلی</span>
                    </li>
                    <li className="navbarItem">
                        <span className="navItem__circle"> </span>
                        <span className="text-sm">امیرعلی</span>
                    </li>
                    <li className="navbarItem">
                        <span className="navItem__circle"> </span>
                        <span className="text-sm">امیرعلی</span>
                    </li>
                    <li className="navbarItem">
                        <span className="navItem__circle"> </span>
                        <span className="text-sm">امیرعلی</span>
                    </li>

                </ul>
            </div>
            {/* end users list  */}
            
            <NavbarLinks theme={theme} setTheme={setTheme}/>

        </nav>
    )
}

export default NavbarChat