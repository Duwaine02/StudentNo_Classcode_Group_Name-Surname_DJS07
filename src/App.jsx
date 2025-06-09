import { useState } from 'react';

function App() {
  console.log('React has started');

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Meme generated:', { topText, bottomText });
  };

  return (
    <>
      <header className="header">
        <img src="/react.svg" alt="React Logo" className="header_img" />
        <h2 className="header_title">Meme Builder</h2>
        <h4 className="header_project">React Course-Project 3</h4>
      </header>
      <main className="main">
        <form onSubmit={handleSubmit} className="meme-form">
          <input
            type="text"
            placeholder="Top text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="meme-input"
          />
          <input
            type="text"
            placeholder="Bottom text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="meme-input"
          />
          <button type="submit" className="meme-button">Generate Meme</button>
        </form>
        <div className="meme-preview">
          <img src="/assets/meme-placeholder.jpg" alt="Meme" className="meme-image" />
          <h2 className="meme-text meme-text-top">{topText}</h2>
          <h2 className="meme-text meme-text-bottom">{bottomText}</h2>
        </div>
      </main>
    </>
  );
}

export default App;