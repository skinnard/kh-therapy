import React from 'react'

function Creds({ fontSize, color, marginBottom }) {
  let pStyle = {
    margin: '0',
    fontSize: fontSize,
    color: color,
    opacity: 0.8,
  }

  let divStyle = {
    marginBottom: marginBottom,
    top: '-3px',
    position: 'relative',
  }

  return (
    <div className="creds" style={divStyle}>
      <p style={pStyle}>MDIV | RP | RMFT</p>
    </div>
  )
}

export default Creds
