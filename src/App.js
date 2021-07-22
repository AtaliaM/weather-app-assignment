import './App.css';
import weather from './apis/weather';
import Home from './pages/Home';

function App() {

  const fetch = async() => {
    const res = await weather.get('?query=london');
    console.log(res)
  }
  fetch();

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
