import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ColabsPage from "./pages/ColabsPage";
import SignInPage from "./pages/SignInPage";
import RestorePasswordPage from "./pages/RestorePasswordPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="py-3">
          <Route path="/restore" component={RestorePasswordPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/colabs" component={ColabsPage} />
          <Route path="/contact-us" component={ContactUsPage} exact />
          <Route path="/about-us" component={AboutUsPage} exact />
          <Route path="/" component={HomePage} exact />
        </main>
      </Router>
    </div>
  );
}

export default App;
