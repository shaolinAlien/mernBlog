import React from 'react'
import {AiFillEye, AiOutlineMessage} from 'react-icons/ai'

export const PostItem = () => {
  return (
    <div className='flex flex-col basis-1/4 flex-grow'>
      <div>IMAGE</div>
      <div className="flex justify-between items-center pt-2">
         <div className='text-xs text-white opacity-50'>USERNAME</div>
         <div className='text-xs text-white opacity-50'>DATA</div>
      </div>
      <div className='text-xl text-white'>POST TITLE</div>
      <p className='text-xs text-white opacity-60 pt-4'>POST TEXT</p>
      
      <div className="flex items-center gap-3 mt-2">
        <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
          <AiFillEye/><span>0</span>
        </button>
        <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
          <AiOutlineMessage/><span>0</span>
        </button>
      </div>
    </div>
 )
}
