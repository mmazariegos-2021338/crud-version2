import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Table } from './components/Table/Table';
import { HomePage } from './pages/HomePage/HomePage';
import { AddProduct } from './pages/AddProduct/AddProduct';
import { UpdateProduct } from './pages/UpdateProduct/UpdateProduct';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/products',
        element: <ProductPage />,
        children: [
          {
            path: '',
            exact: true,
            element: <Table />
          },
          {
            path: 'add',
            element: <AddProduct />
          },
          {
            path: 'update/:id',
            element: <UpdateProduct />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)
