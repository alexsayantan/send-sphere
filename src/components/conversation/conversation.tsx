import Chatbubble from "../chatbubble/chatbubble";
import Chatinput from "../chatinput/chatinput";


const Conversation = () => {
  return (
    <>
      <div className="h-full">
        <div className="h-5/6 px-5 overflow-x-auto scrollbar-none">
            <Chatbubble isCurrentUser={true} />
            <Chatbubble isCurrentUser={false} />
            <Chatbubble isCurrentUser={false} />
            <Chatbubble isCurrentUser={false} />
            <Chatbubble isCurrentUser={false} />
            <Chatbubble isCurrentUser={false} />
            <Chatbubble isCurrentUser={false} />
            <Chatbubble isCurrentUser={false} />

        </div>
        <div className="h-1/6 flex w-full items-end">
          <Chatinput />
        </div>
      </div>
    </>
  );
};

export default Conversation;
