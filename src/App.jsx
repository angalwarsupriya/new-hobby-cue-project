import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import HomePage from './components/HomePage';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './components/Cards';
import AddOwnCard from './components/AddOwnCard';
import Testimonial from './components/Testimonial';

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <Cards />
      <AddOwnCard />
      <Testimonial/>
    </>
  )
}

export default App
