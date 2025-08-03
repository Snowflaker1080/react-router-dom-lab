import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title">Mailbox List</h1>

        {mailboxes.length === 0 ? (
          <p className="has-text-grey">No mailboxes yet.</p>
        ) : (
          <div className="columns is-multiline">
            {mailboxes.map((mailbox) => (
              <div key={mailbox._id} className="column is-one-quarter">
                <Link to={`/mailboxes/${mailbox._id}`}>
                  <div className="box has-text-centered has-background-light">
                    <strong>Mailbox {mailbox._id}</strong>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default MailboxList;