import "./App.css";
import { Route, Routes } from "react-router-dom";
import Alert from "./pages/alert/alert";
import NavBar from "./components/navBar/navBar";
import HomePage from "./pages/homePage/homePage";
import Avatar from "./pages/avatar/avatar";
import Badge from "./pages/badge/badge";
import Card from "./pages/card/card";
import Heading from "./pages/heading/heading";
import Images from "./pages/images/images";
import Installation from "./pages/installation/installation";
import Loader from "./pages/loader/loader";
import Modal from "./pages/modal/modal";
import Text from "./pages/text/text";
import Header from "./components/header/header";
import Button from "./pages/button/button";

function App() {
  return (
    <div className="App">
      <div className="headerComponent">
        <Header />
      </div>
      <div className="bodyComponent">
        <div className="leftBar">
          <NavBar />
        </div>

        <div className="documentsSection">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/badge" element={<Badge />} />
            <Route path="/button" element={<Button />} />
            <Route path="/card" element={<Card />} />
            <Route path="/heading" element={<Heading />} />
            <Route path="/images" element={<Images />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/text" element={<Text />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
