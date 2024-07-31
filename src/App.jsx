import LastBar from "./components/LastBar/LastBar";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section1/Section1";
import "./index.css";
<link href="dist/hamburgers.css" rel="stylesheet"></link>

function App() {
  return (
    <>
      <Navbar/>
      <Menu/>
      <Section1/>
      <LastBar/>
    </>
  );
}

export default App;
