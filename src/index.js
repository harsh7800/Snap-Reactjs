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
import Section from './components/main-Section/Section';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
    <Routes>
      <Route  path='/'><Section/></Route>
      <Route exact path="/todo-list" element={<Todo />} />
      <Route exact path="/calendar" element={<Calendar />} />
      <Route exact path="/reminder" element={<Reminder />} />
      <Route exact path="/stopwatch" element={<Stopwatch />} />
      <Route exact path="/History" element={<Error />} />
      <Route exact path="/Our-Team" element={<Error />} />
      <Route exact path="/Blog" element={<Error />} />
      <Route exact path="/Career" element={<Error />} />
      <Route exact path="/About" element={<Error />} />
      <Route exact path="/Home" element={<Section/>} />
    </Routes>
  </BrowserRouter>
);