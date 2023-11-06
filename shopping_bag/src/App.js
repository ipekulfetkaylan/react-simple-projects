import CartContainer from './CartContainer';
import Navbar from './Navbar';
import { useGlobalContext } from './context';
 
function App() {
  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  );
}

export default App;
