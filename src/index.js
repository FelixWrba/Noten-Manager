import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './index.css';
import './components/pages/loader';
import reportWebVitals from './reportWebVitals';
import Loader from './components/pages/loader';
const App = lazy(() => import('./App'));
const ErrorPage = lazy(() => import('./components/error/ErrorPage'));
const Imprint = lazy(() => import('./components/pages/imprint'));
const GetStarted = lazy(() => import('./components/app/get-started'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/get-started',
    element: <GetStarted />,
    errorElement: <ErrorPage />
  },
  {
    path: '/imprint',
    element: <Imprint />,
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
