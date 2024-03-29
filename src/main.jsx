import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Main from './Layout/Main';
import Statistics from './Statistics/Statistics';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import Blog from './Blog/Blog';
import PageNotFound from './PageNotFound/PageNotFound';
import JobDetails from './JobDetails/JobDetails';
import cartJobsLoader from './loaders/cartJobsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobData.json')
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: cartJobsLoader
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
