import React from 'react'
import ErrorImg from "./error.jpg";
import './Error.scss'

function Error() {
  return (
        <div className='error-wrapper'>
          <img src={ErrorImg} alt="" />
        <h1>Error Page not found</h1>
        </div>
  )
}

export default Error