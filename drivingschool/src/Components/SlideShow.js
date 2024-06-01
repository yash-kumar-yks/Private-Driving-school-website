import React from 'react'

export default function SlideShow({flowCard,isAutomatic, buttons }) {
    
    console.log(buttons);
  return (
    <div>
        <div className='Cards'>
            {flowCard}
        </div>

        {isAutomatic? (
            <div>
                {buttons}
            </div>
        ) : null }
    
    </div>
    
)}
