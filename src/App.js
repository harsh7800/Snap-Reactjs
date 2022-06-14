import Navbar from './components/Navbar/Navbar';
import React   from 'react'
import './App.scss'
import { Route, Routes} from "react-router-dom";
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
        <Route path="/" element={<Section/>}></Route>
        <Route path="/todo-list" element={<Todo />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/reminder" element={<Reminder />}></Route>
        <Route path="/stopwatch" element={<Stopwatch />}></Route>
        <Route path="/history" element={<Error/>}></Route>
        <Route path="/our-team" element={<Error/>}></Route>
        <Route path="/blog" element={<Error/>}></Route>
        <Route path="/career" element={<Error/>}></Route>
        <Route path="/about" element={<Error/>}></Route>
        <Route path="/home" element={<Section />}></Route>
       </Routes>
    </>
  );
}
