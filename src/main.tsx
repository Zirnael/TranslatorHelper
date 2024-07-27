import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from 'react-router-dom';

import './App.css';
import { Text } from './Text/Text.tsx';
import { Example1 } from './Examples/Example1.tsx';

const T = () => {
  return <div>{useParams().test}</div>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/example1'} />,
  },
  {
    path: 'example1',
    element: <Text paragraphs={Example1} />,
  },
  {
    path: ':test',
    element: <T />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
