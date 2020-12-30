import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  const [likes, setLikes]=useState(0)
     
      useEffect(() => {
        document.title = `you have ${likes} likes`
      },)
      const increaseLikes = () => setLikes(likes + 1)

    
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
         <p>my post</p><br></br>
         <button onClick={increaseLikes}>like</button>
        
      </div>
    </div>
  )
}