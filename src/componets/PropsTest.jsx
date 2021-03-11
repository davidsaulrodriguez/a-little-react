import React from 'react'

function PropsTest(props) {
  return (
    <div>
      <h2>
        {props.name}
      </h2>
      <h3>
        {props.age}
      </h3>
      <h1>
        {props.gender}
      </h1>
    </div>
  )
}

export default PropsTest
