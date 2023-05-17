// import { type ComponentType, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'

export function SystemRoutes (): JSX.Element {

  const router = createBrowserRouter([

    {
      path: '/',
      Component: Home
    }

  ])
  return (
        <RouterProvider router={router} />
  )

}
