import logo from './logo.svg';
import './App.css';
import Stepper from './Stepper';

function App() {

  const onAgeChange = () => {
    // do nothing
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to MyFirstRepo! 
        </p>
        <p>
          If you're seeing this, it was deployed automatically!
        </p>
        <div>
          What's your age?
          <Stepper onChange={onAgeChange} />
        </div>
      </header>
    </div>
  );
}

export default App;
