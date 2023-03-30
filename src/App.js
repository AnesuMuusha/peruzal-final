import React from "react";
import Main from "./components/Main";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Peruzal</title>
        <meta
          name="Peruzal"
          content="There various documentation and books used to support our instructor led courses. Browse the guides for programming, mobile app development, web application development, security, and game development."
        />
        <link rel="homepage" href="https://www.https://www.peruzal.com/" />
      </Helmet>
      <Navbar />
      <Main />
      <Footer />
    </HelmetProvider>
  );
}
export default App;