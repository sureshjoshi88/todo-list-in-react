import React from 'react'

const Tostyfiy = (props) => {
  return (
    <div>
     {props.message? <div className='absolute top-2 right-2 bg-green-600 text-white font-medium rounded p-3'>
        <p>{props.message}</p>
      </div>:""}
        {props.message==="Todo is succesfull delete"? <div className='absolute top-2 right-2 bg-red-600 text-white font-medium rounded p-3'>
        <p>{props.message}</p>
      </div>:""}
    </div>
  )
}

export default Tostyfiy
