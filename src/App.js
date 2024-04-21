import logo from './logo.svg';
import './App.css';
import CreateCacheForm from './components/CreateCacheForm';
import GetCache from './components/GetCache';
import DeleteCacheButton from './components/DeleteCacheButton';

function App() {
  return (
    <div className="App">
      <h1>LRU Cache Manager</h1>
      <div className="section">
        <CreateCacheForm />
      </div>
      <hr />
      <div className="section">
        <GetCache />
      </div>
      <hr />
      <div className="section">
        <DeleteCacheButton />
      </div>
    </div>
  );
}

export default App;
