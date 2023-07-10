import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import TermsAndConditions from './Pages/Terms/TermsAndConditions';
import PrivateRoute from './Routes/PrivateRoute';

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
          element: <PrivateRoute> <News /> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/terms',
          element: <TermsAndConditions />
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
