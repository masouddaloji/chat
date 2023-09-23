//components
import MessageChat from "./MessageChat"


const Chat = () => {
  return (
    <div className="message__box py-8 overflow-y-auto overflow-x-hidden">
      <ul className="flex flex-col space-y-5">
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
        <MessageChat response={false} />
        <MessageChat response={true} />
      </ul>
    </div>
  )
}

export default Chat