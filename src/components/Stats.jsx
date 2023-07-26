import React, {useState} from 'react'

function Stats({items}) {

  const numItems = items.length;

  const numPacked = items.filter(item => items.packed).length

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
    {/* if percentage equals 100 render you have everything packed, youre ready to go*/}
      {percentage === 100 ? (
        "You have packed everything, you're ready to go! ✈"
      ) : ''}
      <em> 🎆 You have everything packed. You're ready to go! 🎆 </em> : <em> 🎒 You have {numItems} items on your list 😍, and you have already packed {numPacked} ({percentage}%) ✅ </em> <br />
    </footer>
  )
}

export default Stats 
