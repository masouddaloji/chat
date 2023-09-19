//icons
import { FiSend } from 'react-icons/fi'
import { ImAttachment } from 'react-icons/im'



const SendMassage = () => {
    return (
        <section className="h-[60px] md:h-24 w-full bg-white dark:bg-black-dark dark:border-r-2 dark: border-[#414248] py-3 md:py-6 px-4 md:px-10">
            <div className="flex">
                <input type='text' placeholder="پیام خود را اینجا بنویسید..." className='w-[calc(100%-96px)] md:w-[calc(100%-115px)] ml-4 px-2 text-base text-gray-primary outline-none border-none dark:outline focus:dark:outline-white bg-transparent rounded-[4px]' />
                <div className="iconBox bg-[rgba(28,157,234,.15)] ml-4">
                    <ImAttachment className="text-blue-primary fill-blue-primary font-extrabold text-lg md:text-xl scale-x-[-1]"/>
                </div>
                <div className="bg-blue-primary iconBox">
                    <FiSend className="text-white scale-x-[-1] font-extrabold text-lg md:text-xl" />
                </div>
            </div>
        </section>
    )
}

export default SendMassage