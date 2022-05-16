
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <BookList/> */}
       <Home/>
    </div>
  );
}

export default App;
