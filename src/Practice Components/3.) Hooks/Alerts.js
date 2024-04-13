import React from 'react'

function Alerts(props) {
  return (

props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>


  )
}

export default Alerts