import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import Results from './Results'
import './styles/Dictionary.css'


const Dictionary = (props) => {

  let [word, setWord] = useState(props.defaultWord)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log("Data", response.data[0])
    setResults(response.data[0])
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(e) {
    e.preventDefault()
    search()
  }

  function wordChange(e) {
    e.preventDefault()
    setWord(e.target.value)
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className='Dictionary'>
        <div className='instructions'>
          <h6>What word do you want to look up?</h6>
          <p>i.e. paris, wine, yoga, coding</p>
        </div>
        <Form className='search-container' onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="formSearchBar">
            <Form.Control type="text" placeholder="Type word here..." onChange={wordChange} />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>
        <Results results={results} />
      </div>
    )
  } else {
    load()
    return "Loading..."
  }
}

export default Dictionary
