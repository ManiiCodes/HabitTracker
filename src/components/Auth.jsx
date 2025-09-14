import React, { useState } from 'react'
import { db } from '../utils/db.js'

function makeId(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,8) }

export default function Auth({ setUser }){
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    const users = db.get('users', [])
    if(isRegister){
      if(users.find(u=>u.email===email)){ alert('User exists'); return }
      const newUser = { id: makeId(), email, password, habits: [] }
      users.push(newUser); db.set('users', users)
      alert('Registered! Please login.')
      setIsRegister(false)
      return
    }
    const found = users.find(u=>u.email===email && u.password===password)
    if(!found){ alert('Invalid creds'); return }
    setUser(found)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-6'>
      <div className='w-full max-w-md bg-white rounded-lg shadow p-6'>
        <h2 className='text-2xl font-bold mb-4 text-center'>{isRegister ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input required type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='w-full p-2 border rounded' />
          <input required minLength={4} type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password (min 4 chars)' className='w-full p-2 border rounded' />
          <button className='w-full bg-indigo-600 text-white p-2 rounded'>{isRegister ? 'Register' : 'Login'}</button>
        </form>
        <p className='mt-4 text-center text-sm'>
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <button onClick={()=>setIsRegister(!isRegister)} className='text-indigo-600 ml-2'>{isRegister ? 'Login' : 'Register'}</button>
        </p>
      </div>
    </div>
  )
}
