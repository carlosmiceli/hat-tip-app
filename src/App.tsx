import './App.css';
import Login from './components/login-form'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Paste any URL and get your referral link!</h1>
        <form>
          <input type="text" size={50} />
        </form>
      <Login />
    </div>
  );
}

export default App;
