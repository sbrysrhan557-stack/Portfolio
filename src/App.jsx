import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import About from './Pages/About'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Services from './Pages/Services'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import SideNav from './Components/SideNav'
import GoToUp from './Components/GotoUp'
import ScribbleLoader from './Components/ScribbleLoader'

function App() {
  return <>
  <ScribbleLoader />
  <SideNav />
  <GoToUp/>
    <header>
      <Header />
    </header>
    <main>
      <Home />
      <About/>
      <Work/>
      <Services />
      <Experience/>
      <Contact/>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
}

export default App