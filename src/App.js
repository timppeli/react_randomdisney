import './App.css';
import Header from './components/Header';
import Random from './components/Random';
import Search from './components/Search';
import Character from './pages/Character';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <Random />
    </div>
  );
}

export default App;
