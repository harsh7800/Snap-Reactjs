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
        <Route path='/' element={<Section/>}/>
        <Route exact path="/todo-list" element={<Todo />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/reminder" element={<Reminder />} />
        <Route exact path="/stopwatch" element={<Stopwatch />} />
        <Route exact path="/History" element={<Error />} />
        <Route exact path="/Our-Team" element={<Error />} />
        <Route exact path="/Blog" element={<Error />} />
        <Route exact path="/Career" element={<Error />} />
        <Route exact path="/About" element={<Error />} />
        <Route exact path="/Home" element={<Section />} />
      </Routes>
    </>
  );
}
