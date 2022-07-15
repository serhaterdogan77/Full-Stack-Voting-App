import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from  'react-loader-spinner'


function Loading() {
  return (
      <div className='text-white flex items-center justify-center pt-8'><Triangle ariaLabel="rotating-square" visible={true} color="white" />
      </div>
  )
}

export default Loading