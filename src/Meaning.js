import React from 'react'
import Synonyms from './Synonyms'
import './styles/Meaning.css'

const Meaning = (props) => {
  console.log("Meaning", props.meaning)
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className='definition'>
              {definition.definition}
            </div>
            <div className='example'>{definition.example}</div>
            <br />
            <div className='synonyms'>Similar:
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Meaning
