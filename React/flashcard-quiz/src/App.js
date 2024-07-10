import {useState} from 'react';
import './App.css';

const sampleFlashcards = [
  { question: 'What is the capital of France', answer: 'Paris', known: false },
  { question: 'What is 2+2', answer: '4', known: false },
  { question: 'Which planet is closest to the sun', answer: 'Mercury', known: false },
]
function App() {
  const [cards, setCards] = useState(sampleFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer(!showAnswer)
  }
  function markAsKnown(){
    const updatedCards = [...cards];
    updatedCards[currentIndex].known = !updatedCards[currentIndex].known
    setCards(updatedCards)
  }
  function nextCard(){
    if(currentIndex < cards.length -1){
    setCurrentIndex(currentIndex+1);
    setShowAnswer(false)
  }
}
function prevCard(){
  if(currentIndex > 0 ){
  setCurrentIndex(currentIndex-1);
  setShowAnswer(false)
}
}
function shuffleCards(){
  const shuffleCards = [...cards];
  for(let i = shuffleCards.length - 1; i>0; i-- ){
    const j = Math.floor(Math.random()*(i+1));
    [shuffleCards[i], shuffleCards[j]] = [shuffleCards[j], shuffleCards[i]]

  }
  setCards(shuffleCards);
  setCurrentIndex(0);
}

  return (
  <div className="app">
    <div className="card">
      <div className="progress-indicator">
        Card {currentIndex +1} of {cards.length}
      </div>
      {showAnswer ? (
        <p>{cards[currentIndex].answer}</p>
        ) : (
        <p>{cards[currentIndex].question}</p>
        )}
        <button onClick={toggleAnswer}>Show {showAnswer ? 'Question' : 'Answer'}</button>
        <button onClick={markAsKnown}>
        {cards[currentIndex].known ? 'Mark as Unknown' : 'Mark as Known'}
        </button>
    </div>
    <div className='actions'>
    <button onClick={prevCard} disabled={currentIndex === 0}>
      Previous
    </button>
    <button onClick={shuffleCards}>
      Shuffle
    </button>
    <button onClick={nextCard} disabled={currentIndex === cards.length - 1}>
    Next
    </button>
    </div>
  </div>
  );
}

export default App;
