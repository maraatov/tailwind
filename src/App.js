import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Send from "./components/Send";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Send/>
        <Card/>
        <Footer/>
    </div>
  );
}

export default App;
