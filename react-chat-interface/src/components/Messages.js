import Message from './Message';
import MessageSeparator from './MessageSeparator';

import './Messages.css';

const messages = [
  {
    createdAt: '21:04',
    message: '23/10/2020',
    type: 'separator',
  },
  {
    createdAt: '21:07',
    message: 'Olá',
    target: 'from',
    type: 'text',
  },
  {
    createdAt: '21:08',
    message: 'Um texto diferente',
    target: 'to',
    type: 'text',
  },
  {
    createdAt: '21:09',
    message: 'today',
    type: 'separator',
  },
  {
    createdAt: '21:10',
    message: 'Nova mensagem',
    target: 'from',
    type: 'text',
  },
];

function Messages() {
  return (
    <div className="messages">
      {messages.map(({ type, createdAt, message, target }) =>
        type === 'text' ? (
          <Message key={createdAt} createdAt={createdAt} message={message} target={target} />
        ) : (
          <MessageSeparator key={createdAt} separateAt={message} />
        )
      )}
    </div>
  );
}

export default Messages;
