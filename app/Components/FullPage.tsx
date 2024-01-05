import React from 'react'
import Image from 'next/image'

const FullPage = () => {
  return (
    <div>
        <div className="image">
            <Image 
            src='/images/andrea.jpeg'
            alt='quote'
            fill={true}
            style={{
                objectFit:'cover',
                objectPosition:'center'
            }}
            />
        </div>
    </div>
  )
}

export default FullPage