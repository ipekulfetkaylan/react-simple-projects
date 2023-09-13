import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { AppProvider } from "./context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Home />
        <Sidebar />
        <Modal />
      </AppProvider>
    </div>
  );
}

export default App;
