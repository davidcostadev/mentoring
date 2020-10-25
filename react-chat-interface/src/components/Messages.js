import './Messages.css';

function Messages() {
  return (
    <div className="messages">
      <div className="message-separator">
        <div className="message-separator-label">08/03/2020</div>
      </div>
      <div className="message from">
        <div className="message-inner">
          <div className="message-time">08:30</div>
          <div className="message-text">
            Loren asd asd as asd asd asdas dasd sas dasd asd asd as
          </div>
        </div>
      </div>
      <div className="message-separator">
        <div className="message-separator-label">today</div>
      </div>
      <div className="message from">
        <div className="message-inner">
          <div className="message-time">08:30</div>
          <div className="message-text">
            Loren asd asd as asd asd asdas dasd sas dasd asd asd as
          </div>
        </div>
      </div>
      <div className="message from">
        <div className="message-inner">
          <div className="message-time">08:30</div>
          <div className="message-text">Type your message</div>
        </div>
      </div>
      <div className="message to">
        <div className="message-inner">
          <div className="message-time">08:30</div>
          <div className="message-text">
            Loren asd asd as asd asd asdas dasd sas dasd asd asd as
          </div>
        </div>
      </div>
      <div className="message to">
        <div className="message-inner">
          <div className="message-time">08:30</div>
          <div className="message-text">Type your message</div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
