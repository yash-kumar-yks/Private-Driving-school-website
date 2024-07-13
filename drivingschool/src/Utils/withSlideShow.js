import React from 'react'

export default function SlideShow({flowCard,isManual, buttons }) {

  return (
    <div>
        <div className='Cards'>
            {flowCard}
        
        {isManual? (
            <div>
                {buttons}
            </div>
        ) : null }
        </div>

    </div>
    
)}
