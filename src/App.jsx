import React, { useState, useEffect } from 'react'
import Auth from './components/Auth.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Habits from './components/Habits.jsx'
import CalendarView from './components/Calendar.jsx'
import Progress from './components/Progress.jsx'

function App(){
  const [user, setUser] = useState(null)
  const [route, setRoute] = useState('dashboard')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(()=>{
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  },[theme])

  if(!user) return <Auth setUser={setUser} />

  return (
    <div className='min-h-screen flex bg-gray-50 dark:bg-gray-900 dark:text-white'>
      <Sidebar setRoute={setRoute} setUser={setUser} theme={theme} setTheme={setTheme} />
      <main className='flex-1 p-6 overflow-auto'>
        {route === 'dashboard' && <Dashboard user={user} />}
        {route === 'habits' && <Habits user={user} setUser={setUser} />}
        {route === 'calendar' && <CalendarView user={user} />}
        {route === 'progress' && <Progress user={user} />}
      </main>
    </div>
  )
}

export default App
