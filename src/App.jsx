import "./App.css";
import Header from "./components/header";
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
    </div>
  );
}

export default App;
