import React from "react";
import { sliceEvents, createPlugin } from "@fullcalendar/react";
import { Fragment } from "react";

class CustomView extends React.Component {
  render(props) {
    let segs = sliceEvents(props, true); // allDay=true

    return (
      <Fragment>
        <div class="view-title">
          {props.dateProfile.currentRange.start.toUTCString()}
        </div>
        <div class="view-events">{segs.length} events</div>
      </Fragment>
    );
  }
}

export default createPlugin({
  views: {
    custom: CustomView,
  },
});
