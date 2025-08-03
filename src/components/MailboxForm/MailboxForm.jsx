import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MailboxForm({ addBox }) {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <main className="section">
      <div className="container">
        <h1 className="title">New Mailbox</h1>

        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Box Owner</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={boxOwner}
                  onChange={(e) => setBoxOwner(e.target.value)}
                  required
                  placeholder="Enter owner's name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Box Size</label>
              <div className="control">
                <div className="select">
                  <select
                    value={boxSize}
                    onChange={(e) => setBoxSize(e.target.value)}
                  >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default MailboxForm;