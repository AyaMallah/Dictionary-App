import React from 'react';
import './styles/Phonetic.css'

const Phonetic = (props) => {
  console.log("Phonetic", props.phonetic)
  return (
    <div className='Phonetic'>
      <a id="listen" href={props.phonetic.audio} target='_blank' rel='noreferrer'> Listen</a>
      <p>{props.phonetic.text}</p>
    </div>
  )
};

export default Phonetic;
