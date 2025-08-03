import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = letters?.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-danger">Mailbox Not Found!</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Mailbox {selectedBox._id}</h1>

        <div className="box">
          <h2 className="subtitle is-5">Details</h2>
          <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
          <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
        </div>

        {selectedLetters?.length > 0 ? (
          <>
            <h2 className="subtitle is-4">Letters</h2>
            {selectedLetters.map((letter, index) => (
              <div key={index} className="box has-background-light">
                <div className="content">
                  <p><strong>Dear {letter.recipient},</strong></p>
                  <p>{letter.message}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="has-text-grey">No letters in this mailbox yet.</p>
        )}
      </div>
    </section>
  );
}

export default MailboxDetails;