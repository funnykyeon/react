import logo from './logo.svg';
import './App.css';
import ControlledCompoonent from './components/ControlledCoomponent';
import UncontrolledCompoonent from './components/UncontrolledCompoonent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledCompoonent />
        <UncontrolledCompoonent />
      </header>
    </div>
  );
}

export default App;
