import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Cart} from "./pages/Cart"
import {Store} from "./pages/Store"
import { NavBar } from "./components/navbar"

//Routes in the
function App() {
  return(
    <>
    <NavBar />
    <Container className = "mb-4">
      {/* Routes for the differing page fronts in my react app*/}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </Container>
    </>
  );
}

export default App;
