function MessageSeparator({ separateAt }) {
  return (
    <div className="message-separator">
      <div className="message-separator-label">{separateAt}</div>
    </div>
  );
}

export default MessageSeparator;
