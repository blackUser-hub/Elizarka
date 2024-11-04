import { useLocation } from "react-router-dom";
import Header from "./components/desktop/header";
import Main from "./components/desktop/main";
import Footer from "./components/desktop/footer";
import "./css/app.css"

const App = () => {
  return (<div className="desktop">
    <Header />
    <Main />
    <Footer />
    </div> 
  );
}

export default App;
