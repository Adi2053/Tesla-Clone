import Navbar from "./components/Navbar";
import Model from "./components/Model";
function App() {
  return (
    <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop')] https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop h-screen bg-cover bg-center">
      <Navbar/>
      <Model />
    </div>
  );
}

export default App;
