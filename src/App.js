import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import Search from './components/search'

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
