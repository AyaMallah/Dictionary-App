import React from 'react';

const Phonetic = (props) => {
  console.log(props.phonetic, 'hello')
  return (<div className='phonetic'>
    <a href={props.phonetic.audio} target='_blank' rel='noreferrer'> Listen</a>
    <br />
    {props.phonetic.text}
  </div>
  )
};

export default Phonetic;
