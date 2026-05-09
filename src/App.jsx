import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import './App.scss'

import Frontend from './pages/Frontend/Frontend';
import Resume from './pages/Resume/Resume';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Header />
            <Frontend />
            <Footer />
          </>
        }
      />

      <Route
        path="/portfolio"
        element={
          <>
            <Header />
            <Frontend />
            <Footer />
          </>
        }
      />

      <Route
        path="/portfolio/resume"
        element={<Resume />}
      />

    </Routes>
  )
}

export default App