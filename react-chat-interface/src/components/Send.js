import './Send.css';

function Send() {
  return (
    <div className="send-message">
      <div className="input-group">
        <textarea
          name=""
          id=""
          rows="2"
          className="textarea"
          placeholder="Type your message"
        ></textarea>
        <div className="input-group-btn">
          <button type="button" className="btn">
            <i className="fas fa-paper-plane fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Send;
