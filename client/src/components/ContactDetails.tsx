import Image from "next/image"
//icons
import { FaVolumeUp } from "react-icons/fa"
import { BiSearch, BiSolidVideo } from "react-icons/bi"
import { HiChevronRight } from "react-icons/hi2"
import { IoCallSharp } from "react-icons/io5"

type ContactDetailsProps = {
    width: number
    setIsShowUsers: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactDetails = ({ width, setIsShowUsers }: ContactDetailsProps) => {
    return (
        <section className="px-2.5 py-2.5 lg:px-7 lg:py-5 bg-white dark:bg-black-dark shadow-sm">
            <div className="flex justify-between">
                {/* right box */}
                <div className="flex items-center">
                    <div className="w-10 h-10 md:w-14 md:h-14  ml-4 relative">
                        <Image src='/images/user/user1.jpg' width={56} height={56} alt="user iamge" className="block object-cover rounded-2xl" />
                        <span className="bg-green-primary border-2 border-white w-3 h-3 rounded-full absolute top-0 left-0"></span>
                    </div>
                    <div className="hidden lg:flex lg:flex-col lg:items-start lg:w-36 lg:relative">
                        <h5 className="mb-4 text-sm text-black-primary dark:text-white font-bold">سعید مظفری</h5>
                        <span className="bg-green-primary text-white px-2.5 py-1 rounded-xl text-xs font-medium">آنلاین</span>
                        <span className="absolute top-1/2 -translate-y-1/2 left-0 h-8 w-px border-l border-[#22364580]"></span>
                    </div>
                    <div className="iconBox bg-silver-primary dark:bg-icon-dark mr-4">
                        <FaVolumeUp className="contact__icon" />
                    </div>
                    {width >= 768 && <div className="iconBox  bg-silver-primary dark:bg-icon-dark mr-4">
                        <BiSearch className="text-black-primary dark:text-white text-lg md:text-xl" />
                    </div> }
                    
                    {width < 1024 && <div className="iconBox bg-silver-primary dark:bg-icon-dark mr-4" onClick={() => setIsShowUsers(true)}>
                        <HiChevronRight className="text-black-primary dark:text-white" />
                    </div>}
                </div>
                {/* left box */}
                <div className="flex items-center">
                    
                    <div className="iconBox bg-silver-primary dark:bg-icon-dark mr-4">
                        <IoCallSharp className="contact__icon" />
                        </div>
                    <div className="iconBox bg-silver-primary dark:bg-icon-dark mr-4">
                        <BiSolidVideo className="contact__icon" />
                        </div>


                </div>
            </div>
        </section>
    )
}

export default ContactDetails