import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Form from './components/Form';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

const App = () => 
{
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Main",
        element: <Main/>
      },
      {
        path: "/form",
        element: <Form/>
      }
    ]
  )

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  )
}

export default App;