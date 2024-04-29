import { useEffect, useState } from 'react'
import './App.css'
import AddExpense from './components/main/home/add-expense'

import Header from './components/main/header'
import Dashboard from './components/main/home/dashboard'
import { loadData } from './services/app.service'

function App() {
  const [location, setLocation] = useState("Dashboard")

  useEffect(()=>{
    loadData();
  },[])


  return (
    <div className="w-full w-full">
      
      <Header setLocation={setLocation} location={location}/>
       
      <div className="flex py-2 max-w-screen-xl mx-auto w-full flex-col items-center justify-start gap-2 px-2"> 
          {location === "Dashboard" ? 
              <Dashboard />
            : 
            <div className='w-full'>
              <AddExpense />
            </div>
          }
      </div>
    </div>
  )
}

export default App