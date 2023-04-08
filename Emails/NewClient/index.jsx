import React from 'react'

export default function NewClient({FirstName, LastName}) {
  return (
    <div className='NewClient'>
        <h1>{ FirstName }</h1>
        <p>{ LastName }</p>
    </div>
  )
}
