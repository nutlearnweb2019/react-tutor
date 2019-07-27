import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
      </BrowserRouter>
    );
  }
}

export default App;
