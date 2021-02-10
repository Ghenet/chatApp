import { ConsoleSqlOutlined } from '@ant-design/icons';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessge';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];
    
    const renderMessages = () => {
        const keys = Object.keys(messages);
        // console.log(keys);

        return keys.map((key,index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
            <div key={`msg_${index}` style={{ width: '100%' }}>
                <div className="message-block">
                    {
                        isMyMessage ? <MyMessage /> : <TheirMessage />
                    }
                </div>
                <div className="read-receipts" style={{ marginRight: MyMessage ? '18px' : '0px', marginLeft: MyMessage ? '0px' : '68px'}}>
                    read receipts
                </div>
            </div>
            }
            )
        })
    }

   

return (
    <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person) => `${person.person.username}`)}
            </div>
        </div>
        { renderMessages()}
        <div style={{height:'100px'}} />
        <div className="message-form-container">
            <MessageForm {...props} chatId={activeChat} />
        </div>
                
    </div>
)
}

export default ChatFeed;