function Message({ createdAt, message, target }) {
  return (
    <div className={`message ${target}`}>
      <div className="message-inner">
        <div className="message-time">{createdAt}</div>
        <div className="message-text">{message}</div>
      </div>
    </div>
  );
}

export default Message;
