import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
//icons
import { BsMoon, BsSun } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { PiChatsDuotone, PiUsers } from "react-icons/pi"


type NavbarProps = {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const links = [
    {
        id: "linkChat",
        title: "چت",
        icon: <PiChatsDuotone className="h-7 w-7  font-extrabold" />,
        address: "/chat"
    },
    {
        id: "linkUsers",
        title: "کاربران",
        icon: <PiUsers className="h-7 w-7  font-extrabold" />,
         address: "/users"
    },
    {
        id: "linkAccount",
        title: "پروفایل",
        icon: <FaRegUserCircle className="h-7 w-7 font-extrabold" />,
        address:"/profile"
    },

]

const Navbar = ({ theme, setTheme }: NavbarProps) => {
    const pathname=usePathname()  
    const router = useRouter()

      
    return (
        <nav className="w-full h-[60px] lg:h-auto lg:w-[70px] flex flex-col lg:items-center py-2.5 px-5 lg:px-0 bg-blue-primary order-2 lg:order-1">
            <Image src="/images/logo.png" alt="small logo chat" width={42} height={42} className="hidden lg:block"/>
            <div className="flex-grow flex lg:flex-col justify-between lg:justify-center items-center gap-8">
                {links.map(link =>
                    <Link href={link.address} key={link.id} className={`${link.address===pathname?"text-white":"text-blue-300"} hover:text-white duration-200`}>
                        {link.icon}
                    </Link>
                )}
                {theme === "light" ?
                    <>
                        <BsMoon className="block h-7 w-7 text-blue-300 hover:text-white font-extrabold duration-200" onClick={() => setTheme("dark")} />
                    </>
                    :
                    <>
                        <BsSun className="block h-7 w-7 text-blue-300 hover:text-white font-extrabold duration-200" onClick={() => setTheme("light")} />
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar