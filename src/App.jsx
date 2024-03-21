import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import { NavBar } from './components/NavBar.jsx';

import './index.css';

export const PageWithHeader = ({children}) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense"/>
        </PageWithHeader>
      }
    >
      <NavBar/>
        <div className="h-full bg-white p-4 lg:p-24">
          <Router/>
        </div>
    </Suspense>
  </BrowserRouter>
);
