import foto from './foto.svg'
import Button from './Button';
import { TextField} from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-logo" alt="logo"/>
        <p>
          HELENA NAVARRO
        </p>
        <Button/>
        <a
        className="App-link"
        href="http://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      
      </header>
    </div>
  );
}

export default App;
