import React from 'react';
import Prinpalbar from './component/PrincipalBar/Bar/Bar';
import Products  from './component/Body/ProductList/ProductList';
import Newsletter from './component/Newsletter/Newsletter';
import Footer from './component/Footer/Footer';
import Slider from './component/Slider/Slider'
import './App.css'
const App = () => {
  return (
    <div>
      <Prinpalbar/>
      <Slider/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
