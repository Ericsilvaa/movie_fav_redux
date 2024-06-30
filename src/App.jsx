import Footer from './Components/Footer'
import Header from './Components/Header'
import RoutesApp from './Routes'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

function App() {
  return (
    <div className='app'>
      <ToastContainer limit={3} autoClose={1500} />
      <Header />
      <div className='main'>
        <RoutesApp />
        {/* <LazyRouter /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
