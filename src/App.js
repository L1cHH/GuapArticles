import React, {useState} from 'react';
import Header from './components/Header/Header';
import SearchBlock from './components/SearchBlock/SearchBlock';
import FindBlock from './components/FindBlock/FindBlock';
import Advices from './components/Advices/Advices';
import News from './components/News/News';
import LatestNews from './components/LatestBlock/LatestNews';
import Footer from './components/Footer/Footer';
import Authorization from './components/Authorization/Authorization';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      {/* <SearchBlock/>
      <FindBlock/>
      <Advices/>
      <News/>
      <LatestNews/> */}
      <div className='flex-1'>
        <Authorization/>
      </div>
      <Footer/>
    </div> 
  );
}

export default App;
