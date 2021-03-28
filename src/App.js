import React, { useState } from "react"

import "./App.css"

function App() {
  const [value, setValue] = useState()
  const [list, setList] = useState()
  let array = [
    "Adam",
    "Anthony",
    "Bob",
    "Billy",
    "Carol",
    "Cathy",
    "Kevin",
    "Kyle",
    "Frank",
    "Fred",
  ]
  let suggestion = []

  const setInputValue = (e, x) => {
    setValue(x)
    setList("")
  }

  const autocomplete = (event) => {
    setValue(event.target.value)
    array.forEach((x) => {
      if (
        x.substr(0, event.target.value.length).toUpperCase() ===
        event.target.value.toUpperCase()
      ) {
        suggestion.push(x)
        setList(
          suggestion.map((x, index) => {
            return (
              <p key={index} onClick={(e) => setInputValue(e, x)}>
                {x}
              </p>
            )
          }),
        )
      }
      if (event.target.value.length === 0) {
        setList("")
      }
    })
  }
  return (
    <div className="container-center">
      <input
        onChange={(e) => autocomplete(e)}
        className="autocomplete"
        value={value}
      ></input>

      <div>{list}</div>
    </div>
  )
}

export default App
