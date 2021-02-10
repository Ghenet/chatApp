const MyMessage = ({ message }) => {
    if(message?.attachements?.length > 0) {
        return (
            <img 
            src={message.attachements[0].file}
            alt="message-attahcement"
            className="message-image"
            style={{ float:'right' }}
            />
        )
    }
    return (
        <div>
             My Message
        </div>
    );
}

export default MyMessage;