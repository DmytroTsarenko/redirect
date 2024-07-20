import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Redirect from './Redirect/Redirect';
import Policy from './Policy.js/Policy';

const router = createBrowserRouter([
  {
    path: ":link?/:id?",
    element: <Redirect />,
  },
  {
    path: "policy",
    element: <Policy/>,
  },
]);

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
