import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <UserCard 
      name="A"
      location = "New york"
      occupation = "Teacher"
      />

      <UserCard
      name="B"
      location = "California"
      occupation = "Developer"
      />
    </div>
  );
}

export default App;
