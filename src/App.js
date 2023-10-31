import { useState } from 'react';
import './App.css';
import Header from './Page/Header';
import Layout from './Page/Layout';


function App() {

  const [activeSection, setActiveSection] = useState('sectionOne');
  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Layout activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
