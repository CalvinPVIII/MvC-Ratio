import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Akuma } from "./helpers/IconImages";
import { Venom } from "./helpers/PortraitImages";
import { DoctorDoom_HP } from "./helpers/HyperImages";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={Akuma} />
      <img src={Venom} />
      <img src={DoctorDoom_HP} />
    </>
  );
}

export default App;
