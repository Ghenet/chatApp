import {  ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height= "100vh"
            projectID="fbb8b7c1-0993-4a83-822d-98e68f9a2699"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed ={
                (chatAppProps) => <ChatFeed { ...chatAppProps}/>
            }
        />
    )
}

export default App;