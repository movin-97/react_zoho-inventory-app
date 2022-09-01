import React from 'react'
import { Routes,Route } from 'react-router-dom';
import router from './router';

const RouterProvider = () => {
  return (
    <Routes>
        {
            router.map((route)=>{
                return(
                    <Route key={route.path} path={route.path} element={route.component}>
                      {
                        route.children && route.children.map((child) => (
                          <Route
                            key={child.path}
                            path={child.path}
                            element={child.component}
                          ></Route>
                        ))
                      }
                    </Route>
                )
                
            })
        }
    </Routes>
  )
}

export default RouterProvider