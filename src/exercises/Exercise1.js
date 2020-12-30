import React, { useState } from 'react'

export default function Exercise1() {
  const [user, setUser] = useState({ name: "", city: "", country: "" })
  const handleChange = (e) => setUser({...user, [e.target.name] : e.target.value})

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={user.name} />
        <input type="text" placeholder="Enter City" name="city" onChange={handleChange} value={user.city } />
        <label>
          Pick your Country:
          <select name="country" value={user.country} onChange={handleChange}>
            {countries.map(c => {
              return (<option value={c}>{c}</option>)
            })}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </div>
    </div>
  )

  
}