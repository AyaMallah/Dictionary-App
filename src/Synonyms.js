import React from "react"
import './styles/Synonyms.css'

const Synonyms = (props) => {
  console.log("Synonyms", props.synonyms)
  if (props.synonyms) {
    return (
      <ul className="ul">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>
        })}
      </ul>
    )
  } else {
    return null
  }
}

export default Synonyms
