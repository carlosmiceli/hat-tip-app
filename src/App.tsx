import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import LoginPage from './components/Login-Signup/login-page'
import Dashboard from './components/Dashboard/dashboard'
import Settings from './components/Settings/settings'

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <div className="landing-hero">
          <h1>Paste any URL and get your referral link!</h1>
          <form>
            <input type="text" size={50} />
          </form>
        </div>
        <BrowserRouter>
          <Switch>
          <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </BrowserRouter>
      </div> 
    </div>
  );
}

export default App;
