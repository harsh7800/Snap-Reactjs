import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Todo from "./components/todo/Todo";
import Calendar from "./components/calendar/DatePicker";
import Reminder from "./components/reminder/Reminder";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Error from "./Error";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/todo-list" element={<Todo />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/reminder" element={<Reminder />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/History" element={<Error />} />
      <Route path="/Our-Team" element={<Error />} />
      <Route path="/Blog" element={<Error />} />
      <Route path="/Career" element={<Error />} />
      <Route path="/About" element={<Error />} />
      <Route path="/Home" element={<App />} />
    </Routes>
  </BrowserRouter>
);