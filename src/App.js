import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Posts from './components/Post/Posts';
import Create from './components/Create/Create';
import Show from './components/Show/Show';
import Edit from './components/Edit/Edit';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Switch>
          <Route path="/blog" exact component={Posts}/>
          <Route path="/blog/create" exact component={Create}/>
          <Route path="/blog/:id" exact component={Show}/>
          <Route path="/blog/:id/edit" exact component={Edit}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
