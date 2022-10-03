import { Routes, Route } from "react-router";

import Layout from "./components/layout/Layout";
import LayoutLight from "./components/layout/LayoutLight";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path={"location/:lodgingId"} element={<DetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      {/* Other */}
      <Route path="*" element={<LayoutLight />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
