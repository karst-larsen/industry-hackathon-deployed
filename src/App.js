import "./App.scss";
import BottomFooter from "./components/BottomFooter/BottomFooter";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import LegalFooter from "./components/LegalFooter/LegalFooter";
import NavBar from "./components/NavBar/NavBar";

import Journey from "./components/Journey/Journey";
import BankingBasics from "./components/BankingBasics/BankingBasics";
import BankOnline from "./components/BankOnline/BankOnline";

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <BankingBasics />
      <Journey />
      <BankOnline />
      <LegalFooter />
      <BottomFooter />
    </>
  );
}

export default App;
