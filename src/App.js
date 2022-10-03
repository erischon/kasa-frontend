import { Routes, Route } from "react-router";

import Layout from "./components/layout/Layout";
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
        <Route path="/notfound" element={<NotFoundPage />} />
      </Route>

      {/* Other */}
      <Route path="*" element={<Layout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
