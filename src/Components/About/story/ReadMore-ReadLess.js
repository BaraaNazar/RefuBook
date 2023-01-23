import React,{useState} from 'react'

function ReadMoreReadLess({children}) {
    const[isReadMoreShown,setIsReadMoreShown]=useState(false)
    const toggle = ()=>{
        setIsReadMoreShown(prevState => !prevState)
    }
  return (
    <div>
        {
            isReadMoreShown? children:children.substr(0,300)
        }
        <button className='text-blue-500 underline' type='button' onClick={toggle}>{isReadMoreShown?"Read Less": "...Read More"}</button>
    </div>
  )
}

export default ReadMoreReadLess;