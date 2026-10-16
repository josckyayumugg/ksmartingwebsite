import "./App.css";
import Header from "./components/CustomNav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Madefor from "./components/Madefor";
import WhatInfo from "./components/WhatInfo";
import ContactUs from "./components/ContactUs";
import Deleteyour from "./components/Deleteyour";
import Privacy from "./components/Privacy";
import Footer from "./components/footer";
function App() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main id="top">
        <Hero />
        <HowItWorks />
        <Madefor />
        <WhatInfo />
        <ContactUs />
        <Deleteyour />
        <Privacy />
        <Footer />
      </main>
      <script
        type="module"
        src="https://unpkg.com/ionicons@8.0.13/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@8.0.13/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}

export default App;
