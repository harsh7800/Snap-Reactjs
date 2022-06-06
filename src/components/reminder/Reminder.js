import React from 'react'
import List from './List'
import './Reminder.scss'


const Info = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sofia Cooper",
    age: "1995-06-6",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Miller Wright",
    age: "1998-05-29",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Tara Kelly",
    age: "1991-02-02",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Freddie Watson",
    age: "1999-10-15",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brianna Baker",
    age: "1994-07-05",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brad Myers",
    age: "1997-01-28",
  },
];


function Reminder() {
  return (
      <div className="reminder-wrapper">
        <h1 className="reminder-title">
           Reminder App
        </h1>
        <div className="Board">
        <List info={Today(Info)} />
        <h3 className='upcoming-title'>Upcoming</h3>
        <List info={Upcoming(Info, 4)} Upcoming={true}/>
        </div>
      </div>
  )
}

function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();
  
  let filter = person.filter(data => {
    let day = new Date(data.age).getDate();
    let month = new Date(data.age).getMonth();

    return currentDay === day && currentMonth === month;
  })
  return filter
}

//Upcoming Reminders
function Upcoming(person, toMonth) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter =person.filter(data => {
    
    let month = new Date(data.age).getMonth();
    let day = new Date(data.age).getDate();

    if (currentDay === day)
      // eslint-disable-next-line
      return;

    return month >= currentMonth && month <= currentMonth + toMonth;
  })
  return filter;
}

export default Reminder
