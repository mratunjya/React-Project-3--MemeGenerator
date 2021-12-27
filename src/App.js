import './Components/CSS/master.css'
import Header from './Components/Header/Header';
import './App.css';
import MainBody from './Components/Main Body/MainBody'
import MemeGenerator from './MemeGenerator'

function App() {
  return (
    <div>
      <MemeGenerator>
        <Header />
        <MainBody />
      </MemeGenerator>
    </div>
  );
}

export default App;
