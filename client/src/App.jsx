import './App.css'
import Footer from './customer/components/Footer/Footer'
import Navigation from './customer/components/Navigation/Navigation'
import HomePages from './customer/pages/HomePage/HomePages'

function App() {

  return (
    <>
   <Navigation/>
   <div>
    <HomePages/>
   </div>
   <Footer/>
    </>
  )
}

export default App
