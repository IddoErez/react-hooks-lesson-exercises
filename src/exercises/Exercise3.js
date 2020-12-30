import React, { useState, useEffect } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  const [month, setMonth] = useState(0)
  const [expenses, setExpenses] = useState([])

  const handleChange = (e) => setMonth(e.target.value)

  useEffect(() => {
    (async () => {
      const expenses = await fetchExpenses(month)
      setExpenses(expenses)
      console.log(expenses)
    })()
  }, [month])

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        Pick a month:
          <select name="month" value={month} onChange={handleChange}>
          {months.map((m, i) => {
            return (<option value={i}>{m}</option>)
          })}
        </select>
         {expenses.map(e => {
           return(
          <div>
            <span>{e.item}</span>
            <span>{e.date}</span>
            <span>{e.amount}</span>
          </div>
           )
        })}
      </div>
    </div>
  )

}