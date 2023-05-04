import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => fetch(`http://localhost:5000/news/`)
        },
        {
          path: '/category/:id',
          element: <Category />,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: '/news/:id',
          element: <News />,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
