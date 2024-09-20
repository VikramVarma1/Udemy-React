// components importing

import Navbar from "./components/Navbar"

import Catagories from "./components/Catagories"

import Footer from "./components/Footer"

import Popular from "./components/Popular"

import Recommended from "./components/Recommended"

import Sale from "./components/Sale"

import Topic from "./components/Topic"


function App(){

  return(

    <div>

  <Navbar></Navbar>
  <Catagories></Catagories>
  <Sale></Sale>
  <Recommended></Recommended>
  <Topic></Topic>
  <Popular></Popular>
  <Footer></Footer>

</div>

  )

}

export default App