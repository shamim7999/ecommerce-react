import React from 'react'
import Navigation from './navigation/Nav'
import Products from './products/Products'
import Colors from './sidebar/color/Colors'
import Recommended from './recommended/Recommended'
import Sidebar from './sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  )
}

export default App
