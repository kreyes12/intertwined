import React from 'react'
import './Rain.css'

const Rain = props =>
  <div>
    {
      Array(149).fill(<i className='rain' />)
    }
  </div>

export default Rain
