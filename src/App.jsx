import './App.css'
import Home from './Home'
import Footer from './component/Footer'
import Sidebar from './component/sidebar'

function App() {
 

  return (
    <>
    <div className='min-h-screen'>
    <div className='grid grid-cols-12'>
      <section className='bg-sky-400 col-span-12 sm:col-span-4 md:col-span-2'>
        <Sidebar />
      </section>
      <main className='bg-gray-50 col-span-12 sm:col-span-8 md:col-span-10'>
        <Home />
      </main>
    </div>
    </div>
    <div className='bg-neutral-800'>
      <Footer />
      </div>
    </>
  )
}

export default App
