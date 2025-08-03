import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LetterForm({ mailboxes, addLetter }) {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [mailboxId, setMailboxId] = useState(mailboxes[0]?._id || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">New Letter</h1>

        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Send To Mailbox</label>
              <div className="control">
                <div className="select">
                  <select
                    value={mailboxId}
                    onChange={(e) => setMailboxId(e.target.value)}
                  >
                    {mailboxes.map((box) => (
                      <option key={box._id} value={box._id}>
                        Mailbox {box._id}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Recipient</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  required
                  placeholder="Recipient name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Write your message..."
                ></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">
                  Send Letter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LetterForm;