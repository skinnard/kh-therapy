import React from 'react'

function Creds({ fontSize, color, marginBottom }) {
  let pStyle = {
    margin: '0',
    fontSize: fontSize,
    color: color,
  }

  let divStyle = {
    marginBottom: marginBottom
  }

  return (
    <div className="creds" style={divStyle}>
      <p style={pStyle}>MDIV | RP | RMFT</p>
    </div>
  )
}

export default Creds
