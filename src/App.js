
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Movie from './pages/Movie'
import Home from './pages/Home';
import Membership from './pages/Membership';
import Yourchart from './pages/Yourchart';
import DetailMovie from './pages/DetailMovie';

function App() {
  return (
    <div>
      <Header/>
      <DetailMovie/>
      <Footer/>
    </div>
  );
}

export default App;
