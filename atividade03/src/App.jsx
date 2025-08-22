import Header from "./HeaderA";
import Nav from "./Nav";
import Principal from "./Principal";
import Sidebar from "./SidebarA";
import Footer from "./FooterA";

function App() {
  return (
    <div className="app">
      <div id="parteSuperior">
        <Header />
        <Nav />
      </div>
      <div className="content">
        <Principal />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
