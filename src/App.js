import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import Search from './components/search'
import Table from './components/table'
import Newroster from './components/newroster';
import CreateUser from './components/register'

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <CreateUser />
      <Search />
      <Table />
      <Newroster />
      <Footer />
    </div>
  );
}

export default App;
