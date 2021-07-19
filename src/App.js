import React from 'react';
import Prinpalbar from './component/PrincipalBar/Bar/Bar';
import Products  from './component/Body/ProductList/ProductList'
import Newsletter from './component/Newsletter/Newsletter'
const App = () => {
  return (
    <div>
      <Prinpalbar/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default App
