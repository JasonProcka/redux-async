import React, { Component } from 'react'
// Routing
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import './App.css'

const App = () => (
  <div>
    <header>
    	<Link to="/">Home</Link>
    	<Link to="/about">About</Link>
    </header>	
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </main>
  </div>
)