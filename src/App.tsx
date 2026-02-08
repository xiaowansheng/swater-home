import React from 'react';
import { createBrowserRouter, RouterProvider, useOutlet, useLocation, ScrollRestoration } from 'react-router-dom';
import Layout from '@components/Layout';
import About from '@pages/About';
import Websites from '@pages/Websites';
import { AnimatePresence, motion } from 'framer-motion';

const AnimatedLayout: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <Layout>
      <ScrollRestoration />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
          transition={{ duration: 0.3 }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    element: <AnimatedLayout />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/websites",
        element: <Websites />,
      },
      {
        path: "*",
        element: <About />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;