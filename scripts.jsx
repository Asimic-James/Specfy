import React, { useState } from 'react';

function Specfy() {
  const [userNeeds, setUserNeeds] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const handleInputChange = (event) => {
    setUserNeeds(event.target.value);
  };

  const handleAnalyzeClick = async () => {
    // Simulate AI processing (replace with actual API call)
    const response = await new Promise((resolve) => setTimeout(() => {
      resolve({
        category: 'Laptops',
        specs: {
          cpu: 'Core i5',
          ram: '16GB',
          storage: '512GB SSD',
        },
        reasoning: 'For multitasking and moderate gaming.',
      });
    }, 1000));

    setRecommendations(response);
    setShowResults(true);
  };

  return (
    <div className="container">
      <h1>Welcome to Specfy!</h1>
      <p>Your one-stop shop for navigating the tech world.</p>
      <div className="prompt-box">
        <h2>Tell us about yourself!</h2>
        <textarea
          id="user-needs"
          placeholder="What are you hoping to achieve with technology?"
          value={userNeeds}
          onChange={handleInputChange}
        />
        <div className="prompt-options">
          <button>Gamer</button>
          <button>Work Laptop</button>
          <button>Home Entertainment</button>
        </div>
        <button id="analyze-btn" onClick={handleAnalyzeClick}>
          Let Specfy Help!
        </button>
      </div>
      {showResults && (
        <div className="results">
          <h3>Your Recommended Specs:</h3>
          <p>Category: {recommendations.category}</p>
          <ul>
            <li>CPU: {recommendations.specs.cpu}</li>
            <li>RAM: {recommendations.specs.ram}</li>
            <li>Storage: {recommendations.specs.storage}</li>
          </ul>
          <p>Reasoning: {recommendations.reasoning}</p>
        </div>
      )}
    </div>
  );
}

export default Specfy;
