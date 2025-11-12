import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className='bg-gray-900 text-blue-400 text-2xl'>AI Resume Builder</p>
      </div>
    </>
  )
}

export default App
