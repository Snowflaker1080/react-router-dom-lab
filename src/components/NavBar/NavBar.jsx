import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Post Office
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/mailboxes" className="navbar-item">Mailboxes</Link>
          <Link to="/new-mailbox" className="navbar-item">New Mailbox</Link>
          <Link to="/new-letter" className="navbar-item">New Letter</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;