import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-avatar">
        <img src="https://ui-avatars.com/api/?name=David+Costa" alt="david-costa-avatar" />
      </div>
      <div className="header-name">David Costa</div>
      <div className="header-right">
        <button type="button" className="btn-icon">
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
