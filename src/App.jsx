import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import HomePage from './components/HomePage';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './components/Cards';
import AddOwnCard from './components/AddOwnCard';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import HobbyCommunity from './components/HobbyCommunity';

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <Cards />
      <AddOwnCard />
      <Testimonial />
      <HobbyCommunity/>
      <Footer/>
    </>
  )
}

export default App
