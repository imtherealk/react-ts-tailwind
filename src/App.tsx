import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes";

import "./styles/App.css";
import React, { Suspense } from "react";
import LoadingPage from "pages/LoadingPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
