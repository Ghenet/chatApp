import { useState }from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = uUeState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Applications</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input"  placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} classNmae="input" placeholder="Username" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
           </form>
            </div>


        </div>
    
    )
}