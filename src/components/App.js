import React from 'react';
import './App.css';
import Header from './Header/Header';
import Movie from './Movie/Movie';
import Search from './Search/Search';

function App() {
  return (
    <div className="App">
      <h1>App</h1>

      <Header />
      <Movie />
      <Search />
    </div>
  );
}

export default App;
