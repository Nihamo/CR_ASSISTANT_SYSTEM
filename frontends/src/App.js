// App.js
import React from "react";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";  // Make sure this is here

function App() {
  return (
    <Router>  {/* Wrap everything inside BrowserRouter */}
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;