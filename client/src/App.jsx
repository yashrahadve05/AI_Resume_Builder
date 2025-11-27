import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import ResumePreview from './pages/ResumePreview';

import { SignedIn } from '@clerk/clerk-react';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        >
          <Route
            path="builder/:resumeId"
            element={
              <SignedIn>
                <ResumeBuilder />
              </SignedIn>
            }
          />
          <Route
            path="preview/:resumeId"
            element={
              <SignedIn>
                <ResumePreview />
              </SignedIn>
            }
          />
        </Route>

        <Route path='auth/login' element={<Login />} />
        <Route path='auth/signup' element={<SignUp />} />

      </Routes >
    </>
  )
}

export default App
