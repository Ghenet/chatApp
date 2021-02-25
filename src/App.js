import {  ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height= "100vh"
            projectID="fbb8b7c1-0993-4a83-822d-98e68f9a2699"
            userName="bini"
            userSecret="123456"
            renderChatFeed ={
                (chatAppProps) => <ChatFeed { ...chatAppProps}/>
            }
        />
    )
}

export default App;