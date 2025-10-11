import './App.css'
import { HeaderNavbar } from './Header/HeaderNavbar'
import { BodyContent } from './Content/BodyContent'
import { FooterBody } from './Footer/FooterBody'

function App() {

  return (
    <>
    <div className='h-min flex flex-col relative w-screen overflox-hidden'>
      <HeaderNavbar />
      <BodyContent />
      <FooterBody />
    </div>
    </>
  )
}

export default App
