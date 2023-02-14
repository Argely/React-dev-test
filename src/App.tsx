import React from 'react';
import Dashboard from './components/Dashboard';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import PublicRoute from './components/PublicRoute'
import { PrivateRoutes } from './components/PrivateRoutes';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './contexts/authContext';

import './App.css';

function App() {
  return (

    <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/private' element={<PrivateRoutes />}>
              <Route index element={<Dashboard />}/>
              <Route path="/private/user-form" element={<UserForm />}/>
              <Route path="/private/user-list" element={<UserList />}/>
            </Route>
            <Route path='/' element={<PublicRoute />}>
              <Route index element={<Login />}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
