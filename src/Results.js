import React from 'react'
import Meaning from './Meaning'
import Phonetic from './Phonetic'

const Results = (props) => {
  console.log("Results", props.results)
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3>{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            )
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} >
              <div >
                <Meaning meaning={meaning} />
              </div>
            </section>
          );
        })
        }
      </div >
    )
  } else {
    return null
  }
}

export default Results
