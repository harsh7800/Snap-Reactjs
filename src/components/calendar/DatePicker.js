import React, { Component, Fragment } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import './Calendar.scss'

export default class DatePicker extends Component {
  calendarRef = React.createRef();
  render() {
    return (
      <div className='calendar-wrapper'>
        <h1>Calendar</h1>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={this.handleDateClick}
          eventContent={renderEventContent}
        />
      </div>
    );
  }
  someMethod() {
    let calendarApi = this.calendarRef.current.getApi();
    calendarApi.next();
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
