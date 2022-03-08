import logo from './logo.svg';
import './App.css';
import './assets/main.css';
import { getMonth } from './utils';
import CalendarHeader from './components/CalendarHeader';
import React from 'react';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import { useState  } from 'react';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  console.log(currentMonth);
  return (
    <React.Fragment>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className = "flex flex-1">
          <Sidebar />
          {<Month month = {currentMonth}/> }
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
