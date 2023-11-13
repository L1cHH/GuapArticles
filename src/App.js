import React from 'react';
import Header from './components/Header/Header';
import SearchBlock from './components/SearchBlock/SearchBlock';
import FindBlock from './components/FindBlock/FindBlock';
import Advices from './components/Advices/Advices';
import News from './components/News/News';
import LatestNews from './components/LatestBlock/LatestNews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <SearchBlock/>
      <FindBlock/>
      <Advices/>
      <News/>
      <LatestNews/>
      <Footer/>
    </div> 
  );
}

export default App;
