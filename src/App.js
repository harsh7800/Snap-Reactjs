import Navbar from './components/Navbar/Navbar';
import React   from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Todo from './components/todo/Todo'
import Calendar from './components/calendar/DatePicker'
import Reminder from './components/reminder/Reminder'
import Stopwatch from './components/Stopwatch/Stopwatch'
import Section from './components/main-Section/Section';
import Error from './Error';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/todo-list' element={<Todo/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/reminder' element={<Reminder/>}/>
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/History' element={<Error/>}/>
        <Route path='/Our-Team' element={<Error/>}/>
        <Route path='/Blog' element={<Error/>}/>
        <Route path='/Career' element={<Error/>}/>
        <Route path='/About' element={<Error/>}/>
        <Route path='/Home' element={<Section/>}/>
      </Routes>
    </>
  );
}
