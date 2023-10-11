import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="bg-green-300 w-full h-screen"></div>
    </>
  );
}

export default App;
