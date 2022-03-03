import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Notes } from './components/Notes';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header  searchBar={true}/>
    <Notes/>
    <Footer/>
    {/* <h3>MyApp</h3> */}
        </>
  );
}

export default App;
