import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';
import postOfficeImage from './assets/Post Office Image.png';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      _id: mailboxes.length + 1,
      ...formData,
    };
    setMailboxes([...mailboxes, newBox]);
  };

  const addLetter = (formData) => {
    setLetters([...letters, formData]);
  };

  return (
    <div className="App has-background-light" style={{ minHeight: '100vh' }}>
      <NavBar />
      <section className="section">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <div className="has-text-centered">
                  <h1 className="title is-2">Post Office</h1>
                  <p className="subtitle is-5">Welcome! Use the navigation bar to get started.</p>

                   <figure className="image is-3by2" style={{ maxWidth: '600px', margin: 'auto' }}>
                    <img src={postOfficeImage} alt="Post Office" />
                  </figure>

                </div>
              }
            />

            <Route
              path="/mailboxes"
              element={<MailboxList mailboxes={mailboxes} />}
            />
            <Route
              path="/new-mailbox"
              element={<MailboxForm addBox={addBox} />}
            />
            <Route
              path="/mailboxes/:mailboxId"
              element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
            />
            <Route
              path="/new-letter"
              element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
            />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
