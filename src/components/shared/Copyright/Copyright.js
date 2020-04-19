import React from 'react'

function Copyright() {
  const date = new Date().getFullYear()

  let divStyle = {
    color: '#fff',
    fontSize: '12px',
    margin: '0'
  }

  return <p style={divStyle}>&copy; {date} Kristen Hodges Therapy</p>
}

export default Copyright
