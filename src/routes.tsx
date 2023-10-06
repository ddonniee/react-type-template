import React from "react";

import Sample from "./views/Sample";
import Test from "./views/Test";
// ▼▼▼▼▼▼▼▼▼▼▼▼▼ load componenets below ▼▼▼▼▼▼▼▼▼▼▼▼▼
// const Sample = React.lazy(() => import('./views/Sample'))
// const Test = React.lazy(()=>import('./views/Test'))

interface Route {
    path: string;
    exact: boolean;
    name: string;
    element: React.FC; 
  }

const routes:Route[] = [
    // ▼▼▼▼▼▼▼▼▼▼▼▼▼ route each component below ▼▼▼▼▼▼▼▼▼▼▼▼▼
  { path: '/', exact: true, name: 'Sample', element: Sample },  
  { path: '/test', exact: true, name:'Test', element: Test},  
]
export default routes;