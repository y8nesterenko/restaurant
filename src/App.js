import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import Menu from './components/Menu/Menu'
import Chef from './components/Chef/Chef'
import Video from './components/Video/Video'
import Awards from './components/Awards/Awards'
import Gallery from './components/Gallery/Gallery'
import FindUs from './components/FindUs/FindUs'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Video />
      <Awards />
      <Gallery />
      <FindUs />
      <Footer />

    </div>
  );
}

export default App;
