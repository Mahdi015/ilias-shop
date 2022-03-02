import "./App.css";
import {
  Header,
  Navbar,
  Announcement,
  Slider,
  Sidebar,
  Home,
  Footer,
} from "./components";
function App() {
  return (
    <div className="App">
      <Announcement />
      <Header />
      <Navbar />
      <Home />
      {/* <Slider />
      <Sidebar /> */}
      <Footer />
    </div>
  );
}

export default App;
