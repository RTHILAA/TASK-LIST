import React from 'react'
import './App.css'
import { Plus } from 'lucide-react';

export default function App() {
  return (
    <div className="App">
    <div className="title">
      <h1>Today's Tasks</h1>
      <p>You're all done!</p>
    </div>
    <div className="task">
     <form method='post' className='form'>
     <input type="text" placeholder='Add a new task...' required/>
     <button type="submit" className="btn-submit">
      <Plus size={24} />
    </button>
     </form>
    </div>
</div>
  )
}
