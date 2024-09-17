
interface ChatboxProps {
  favoritesTitle: string;
  messages: {
    image: string;
    name: string;
    message: string;
  }[];
}

const Chatbox: React.FC<ChatboxProps> = ({ favoritesTitle, messages }) => {
  return (
    <div>
      <div className="flex items-center w-full h-10 mt-8">
        <p className="font-medium text-gray-700 text-sm">{favoritesTitle}</p>
      </div>
      <div className="mr-5">
        {messages.map((msg, index) => (
          <div key={index} className="mb-5 cursor-pointer p-4 rounded-lg hover:bg-gray-200">
            <div className="flex gap-x-2 items-start">
              <div className="mt-2 min-w-20">
                <img
                  className="w-14 h-14 rounded-full"
                  src={msg.image}
                  alt="Default avatar"
                />
              </div>
              <div>
                <h2 className="font-medium">{msg.name}</h2>
                <p className="w-full line-clamp-3">{msg.message}</p>
              </div>
            </div>
            <hr className="h-[1px] mx-auto mt-4 bg-gray-200 border-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
