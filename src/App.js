import { Fragment } from 'react';
import { AnimatePresence } from 'framer-motion';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { publicRoutes } from '~/routes';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.components;
          let Layout = Fragment;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
