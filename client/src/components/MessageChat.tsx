// type messageProps = {
//     response: boolean
//     username: string
//     time: string
//     message: string[]
// }
type res={
    response:boolean
}
const MessageChat = ({response }:res) => {
    
    return (
        <li className={`w-full xl:w-4/5 flex items-start ${response ? "flex-row" : "flex-row-reverse"} `}>
            {/* image box */}
            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-[url('/images/user/user1.jpg')] bg-cover ${response?"ml-6":"mr-6" }`}></div>
            {/* message content */}
            <div className="flex flex-col flex-1">
                {/* message header */}
                <div className={`flex gap-5 ${response?"flex-row":"flex-row-reverse"}`}>
                    <h5 className="pr-5 text-sm text-black-primary font-bold dark:text-white">سعید مظفری</h5>
                    <h6 className="text-xs text text-gray-primary font-normal dark:text-white">01:35 صبح</h6>
                </div>
                {/* start message */}
                <ul className={`mt-2.5 text-[13px] md:text-sm flex flex-col gap-2.5 ${response?"items-start":"items-end"}`}>
                    <li className={`${response?"message__text":"message__text--resive"} `}>
                        <h5 className="font-medium">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </h5>
                    </li>
                    <li className={`${response?"message__text":"message__text--resive"}`}>
                        <h5 className="font-medium"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 😇</h5>
                    </li>
                </ul>
            </div>

        </li>
    )
}

export default MessageChat