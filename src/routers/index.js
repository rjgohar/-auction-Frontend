import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/layout";
import Home from "../pages/home";

import LangingPage from "../pages/landing";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LangingPage />} />

          {
            <Route
              path="/home"
              element={
                <Layout header={<Header />}>
                  <Home />
                </Layout>
              }
            />
          }
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
