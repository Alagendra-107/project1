
import './App.css'
import Nameprint from './components/Nameprint'

import Bugs from './components/Bugs'
import ProfileCard from './components/ProfileCard'
import ProductCard from './components/ProfileCard'

function App (){
  return(
    <div>
      <Nameprint />
      <Bugs /> <hr /> <br />
      <ProfileCard/>
      {/* <ProductCard /> */}
    </div>
  )
}

export default App
