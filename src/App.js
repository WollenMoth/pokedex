import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notFound";
import "./css/App.css";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Navbar />
      <Container as="main" className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
