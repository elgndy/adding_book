import React , {Component} from 'react';
import Nav from './components/navbar';

import BookContextProvider from './context/bookcontext'

import Form from './components/bookform';
import BookDetails from './components/bookdetails';
class App extends Component{
  render(){
  return (
    <div className="App">
      <BookContextProvider>
      <Nav />
      <BookDetails />
      <Form />
      </BookContextProvider>
    </div>
  );
}
}

export default App;
