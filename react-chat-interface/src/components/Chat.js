import Header from './Header';
import Messages from './Messages';
import Send from './Send';

import './Chat.css';

function Chat() {
  return (
    <div className="chat">
      <Header />
      <Messages />
      <Send />
    </div>
  );
}

export default Chat;
