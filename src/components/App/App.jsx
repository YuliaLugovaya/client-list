import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';

function App() {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(result => setClients(result.slice(0, 10)))
  }, [])

  function addClients() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(result => setClients(prev => [...prev, ...result.slice(0, 10)]))
  }

  return (
    <div className="App wrapper">
      <Header addClients={addClients}/>
      <Main clients={clients}/>
      <Footer />
    </div>
  );
}

export default App;
