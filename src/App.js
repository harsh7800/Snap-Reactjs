import Navbar from './components/Navbar/Navbar';
import React   from 'react'
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Section from './components/main-Section/Section';
import Todo from "./components/todo/Todo";
import Calendar from "./components/calendar/DatePicker";
import Reminder from "./components/reminder/Reminder";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Error from "./Error";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Section />
        </Route>
        <Route path='/Todo-List'><Todo/></Route>
        <Route path='/Calendar'><Calendar/></Route>
        <Route path='/Reminder'><Reminder/></Route>
        <Route path='/Stopwatch'><Stopwatch/></Route>
        <Route path='/History'><Error/></Route>
        <Route path='/Our-Team'><Error/></Route>
        <Route path='/Blog'><Error/></Route>
        <Route path='/Career'><Error/></Route>
        <Route path='/About'><Error/></Route>
      </Routes>
    </>
  );
}
