import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Review from "./components/Review";
import Apply from "./components/Apply";
import Support from "./components/Support";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="absolute pointer-events-none">
      <div className="md:mx-4 xl:mx-20 2xl:mx-60">
        <Navbar></Navbar>

        {/* banner here  */}
        <Banner></Banner>

        {/* review section  */}
        <Review></Review>

        {/* apply section  */}
        <Apply></Apply>

        {/* support section  */}
        <Support></Support>

        {/* features here  */}
        <Features></Features>
      </div>
      {/* footer here  */}
      <Footer></Footer>
    </div>
  );
}

export default App;
