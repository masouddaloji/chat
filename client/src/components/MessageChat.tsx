// type messageProps = {
//     response: boolean
//     username: string
//     time: string
//     message: string[]

import Image from "next/image"

// }
type res = {
    response: boolean
}
const MessageChat = ({ response }: res) => {

    return (
        <li className={`w-full flex ${response ? "flex-row" : "flex-row-reverse"}`}>
            <div className="flex flex-col w-fit max-w-[400px]">

                {/* message content */}
                <div className="flex flex-col flex-1">
                    {/* message header */}
                    <div className={`flex gap-5 ${response ? "flex-row" : "flex-row-reverse "}`}>
                        <h5 className="pr-5 text-sm text-black-primary font-bold dark:text-white">سعید مظفری</h5>
                        <h6 className="text-xs text text-gray-primary font-normal dark:text-white">01:35 صبح</h6>
                    </div>
                    {/* start message */}
                    <ul className={`mt-2.5 text-[13px] md:text-sm`}>
                        <li className={`${response ? "message__text" : "message__text--resive"}`}>
                            <h5 className="font-medium"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 😇 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </h5>
                        </li>
                    </ul>
                </div>
                {/* image box */}
                <div className={`flex ${response ? "flex-row" : "flex-row-reverse "}`}>

                <div className={`w-9 h-9 rounded-full overflow-hidden -mt-4 inline-block shadow-img-light-shadow dark:shadow-img-dark-shadow`}>
                    <Image src="/images/user/user1.jpg" alt="user profile image" width={32} height={32} className="w-full h-full object-cover"/>
                </div>
                </div>
            </div>

        </li>
    )
}

export default MessageChat