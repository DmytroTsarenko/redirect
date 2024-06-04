import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Redirect from './Redirect/Redirect';

const router = createBrowserRouter([
  {
    path: ":link?/:id?",
    element: <Redirect />,
  },
]);

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
