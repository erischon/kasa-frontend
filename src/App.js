import { Routes, Route } from "react-router";

import Layout from "./components/layout/Layout";
import LayoutLight from "./components/layout/LayoutLight";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={"location/:lodgingId"} element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Other Routes */}
        <Route path="*" element={<LayoutLight />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
