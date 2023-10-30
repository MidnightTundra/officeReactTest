import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Cart} from "./pages/Cart"
import {Store} from "./pages/Store"
import {Account} from './pages/Account'
import {SignUp} from './pages/SignUp.jsx';
import {Item} from './pages/Item'
import { NavBar } from "./components/Navigation/navbar"
import { Product } from "./pages/Product"

//Routes in the
function App() {
  return(
    <>
    <NavBar />
    <Container style={{paddingTop : "15px"}}className = "mb-4">
      {/* Routes for the differing page fronts in my react app*/}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/account' element={<Account />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
