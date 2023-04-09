import React from 'react'

export default function NewClient({ Data }) {

  const { FirstName, LastName } = Data;

  return (
    <div className='NewClient'>
        <h1>{ FirstName }</h1>
        <p>{ LastName }</p>
    </div>
  )
}
