import { ConsoleSqlOutlined } from '@ant-design/icons';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessge';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];
    
    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys);

        // return keys.map((key,index) => {
        //     const message = messages[key];

        // })
    }

    renderMessages();

return (
    <div>
        Chatfeed
    </div>
)
}

export default ChatFeed;