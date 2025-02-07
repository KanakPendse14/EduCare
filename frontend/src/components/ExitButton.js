import React from 'react'

function ExitButton({onClick}) {
  return (
    <div>
        <button
          onClick={onClick}
          className='bg-black/20 text-white px-7 py-3 rounded-full shadow-lg hover:bg-black/30 transition duration-300 absolute top-2 left-2py-2 '
        >
          Exit
        </button>
    </div>
  )
}

export default ExitButton
