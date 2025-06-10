import React from 'react'

const Tostyfiy = (props) => {
  return (
    <div>
     {props.message? <div className='absolute top-2 right-2 bg-green-600 text-white font-medium rounded p-3'>
<div className='flex gap-4'>
                    <p>{props.message}</p>
                    <p className='text-xl font-medium text-red-600 items-center' onClick={(
                      )=>props.clearMessage()}>X</p>
          </div>        
      </div>:""}
        {props.message==="Todo is succesfull delete"? <div className='absolute top-2 right-2 bg-red-600 text-white font-medium rounded p-3'>
          <div className='flex gap-4 items-center'>
                    <p>{props.message}</p>
                    <p className='text-xl font-medium'  onClick={(
                      )=>props.clearMessage()}>X</p>
          </div>
      </div>:""}
    </div>
  )
}

export default Tostyfiy
