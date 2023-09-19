//icons
import { BsMoon, BsSun } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { PiChatsDuotone, PiUsers } from "react-icons/pi"


type NavbarLinksProps = {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}
const links=[
    {
    id:"linkChat",
    title:"چت",
    icon:<PiChatsDuotone className="font-extrabold" />
}
]
const NavbarLinks = ({ theme, setTheme }: NavbarLinksProps) => {
    return (
        <section className="flex items-center justify-between lg:flex-col py-3 px-6 h-[60px]">
            <div className="iconBox bg-silver-primary dark:bg-icon-dark hover:bg-[#d3d8db] text-black-primary dark:text-white">
                <PiChatsDuotone className="font-extrabold" />
            </div>
            <div className="iconBox bg-silver-primary dark:bg-icon-dark hover:bg-[#d3d8db] text-black-primary dark:text-white">
                <PiUsers className="font-extrabold" />
            </div>
            <div className="iconBox bg-silver-primary dark:bg-icon-dark hover:bg-[#d3d8db] text-black-primary dark:text-white">
                <FaRegUserCircle className="font-extrabold" />
            </div>

            {theme === "light" ?
                <>
                    <div className="iconBox bg-silver-primary dark:bg-icon-dark hover:bg-[#d3d8db] text-black-primary dark:text-white" onClick={() => setTheme("dark")}>
                        <BsMoon className="font-extrabold" />
                    </div>
                </>
                :
                <>
                    <div className="iconBox bg-silver-primary dark:bg-icon-dark hover:bg-[#d3d8db] text-black-primary dark:text-white" onClick={() => setTheme("light")}>
                        <BsSun className="font-extrabold" />
                    </div>
                </>
            }

        </section>
    )
}

export default NavbarLinks