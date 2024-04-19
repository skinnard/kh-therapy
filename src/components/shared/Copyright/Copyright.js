import React from 'react'

function Copyright() {
  const date = new Date().getFullYear()

  return (
    <p className="copyright !text-white text-xs m-0 opacity-80">
      &copy; {date} Kristen Hodges Therapy
    </p>
  )
}

export default Copyright
