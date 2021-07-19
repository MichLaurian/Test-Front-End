import React from 'react';
import Prinpalbar from './component/PrincipalBar/Bar/Bar';
import Products  from './component/Body/ProductList/ProductList'
import Newsletter from './component/Newsletter/Newsletter'
import Footer from './component/Footer/Footer';
const App = () => {
  return (
    <div>
      <Prinpalbar/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
