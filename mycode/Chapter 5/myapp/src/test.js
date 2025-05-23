import React, { useState } from 'react'; // Importing React and the useState hook for managing component state
import './secret.css'; // Importing a custom CSS file for styling

function SecretMessage() {
  // State to track whether the secret message is shown or hidden
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Button toggles the showSecret state between true and false */}
      <button className="cool-button" onClick={() => setShowSecret(!showSecret)}>
        {/* Button text changes based on showSecret state */}
        {showSecret ? 'Hide' : 'Reveal'} Secret
      </button>

      {/* Conditional rendering: show this message only if showSecret is true */}
      {showSecret && (
        <p style={{ marginTop: '20px', fontSize: '1.5rem', color: 'purple' }}>
          Why don’t skeletons fight each other? Because they don’t have the guts. 💀🤣
        </p>
      )}
    </div>
  );
}

export default SecretMessage; // Exporting the component so it can be used elsewhere (like in App.js)
