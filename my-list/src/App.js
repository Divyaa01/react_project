import './App.css';

import Navbar from './components/Navbar.js';
import Text from './components/Text.js';

function App() {
  return (
    <div className="main">
      <Navbar title="Text-cases" />

      <div className="container my-5">
      <Text heading ="Analyze your content" />
      </div>
      
      </div>



  );
}

export default App;
