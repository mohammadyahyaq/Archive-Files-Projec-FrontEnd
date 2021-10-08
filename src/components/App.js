import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// import the custom components
import LoginScreen from './Login/LoginScreen';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/'>
          <LoginScreen />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
