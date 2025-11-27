import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

function App() {
    return (
        <>
            <SignedIn>
                <Navigate to="/dashboard" replace />
            </SignedIn>

            <SignedOut>
                <div className='flex items-center justify-center min-h-screen px-4'>
                    <SignIn
                        fallbackRedirectUrl="/dashboard"
                        signUpUrl="/auth/signup"
                    />
                </div>
            </SignedOut>
        </>
    )
}

export default App