import { testData, testData2 } from "../../data/chats";
import Conversation from "../conversation/conversation";
import Chatbar from "../chatbar/chatbar";
import Chatbox from "../chatbox/chatbox";
import Search from "../search/search";
import Chathead from "../chathead/chathead";

const Layout = () => {
  return (
    <div className="flex gap-x-2 px-5 py-10 min-h-svh h-svh">
      <div className="w-2/6 max-h-full h-full">
        <div className="h-1/6">
          <Chatbar />
          <Search />
          <hr className="h-1 my-8 bg-gray-400 border-0 block" />
        </div>
        <div className="h-5/6 max-h-5/6 overflow-y-auto scrollbar-thin">
          <Chatbox
            favoritesTitle={testData.favoritesTitle}
            messages={testData.messages}
          />
          <Chatbox
            favoritesTitle={testData2.favoritesTitle}
            messages={testData2.messages}
          />
        </div>
      </div>
      <div className="w-4/6">
        <div className="w-full h-1/6">
          <Chathead />
          <hr className="h-1 w-full mx-2 my-4 bg-gray-400 border-0 block" />
        </div>
        <div className="w-full h-5/6">
          <Conversation />
        </div>
      </div>
    </div>
  );
};

export default Layout;
