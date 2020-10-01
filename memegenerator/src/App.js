import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Home from './components/views/Home';
import Memes from './components/views/Memes';
export default function App() {
  return (
   <BrowserRouter>
       <Header />
       <switch>
           <Route exact path='/' component={Home}></Route>
           <Route path="/:id/:text_boxes" component={Memes}></Route>
       </switch>
       <Footer />
   </BrowserRouter>
  )
}
