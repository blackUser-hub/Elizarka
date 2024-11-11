import { useState } from "react";
import Header from "./components/desktop/header";
import Main from "./components/desktop/main";
import Footer from "./components/desktop/footer";
import "./css/app.css"

const Desktop = () => {
  document.body.setAttribute('class', 'desktop-body')
  const [videoId, setVideoId] = useState(0)
  const [ownerId, setOwnerId] = useState(Math.floor(Math.random() * (1000000000 - 0 + 1)) + 0)

  return (<div className="desktop">
    <Header />
    <Main vid={videoId} setVid={setVideoId}  owner={ownerId} setOwner={setOwnerId} />
    <Footer />
    </div> 
  );
}

export default Desktop;
