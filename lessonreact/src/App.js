import './App.css';
import Navigation from './Component/Navigation';
import Players from './Component/Players';
import Footer from './Component/Footer';

function App() {
  return (
    <div className='App'>
     <Navigation/>
     <Players/>
     <Footer/>
    </div>
  );
}

export default App;