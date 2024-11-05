import Header from "./components/desktop/header";
import Main from "./components/desktop/main";
import Footer from "./components/desktop/footer";
import "./css/app.css"

const Desktop = () => {
  document.body.setAttribute('class', 'desktop-body')

  return (<div className="desktop">
    <Header />
    <Main />
    <Footer />
    </div> 
  );
}

export default Desktop;
