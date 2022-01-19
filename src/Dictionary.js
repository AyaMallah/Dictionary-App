import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import Results from './Results'


const Dictionary = () => {

  let [word, setWord] = useState('')
  let [results, setResults] = useState(null)

  function handleResponse(response) {
    // console.log(response.data[0])
    setResults(response.data[0])
  }

  function search(e) {
    e.preventDefault()

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    axios.get(apiUrl).then(handleResponse)
  }

  function wordChange(e) {
    e.preventDefault()
    setWord(e.target.value)
  }


  return (
    <div>
      <Form className='search-container' onSubmit={search}>
        <Form.Group className="mb-2" controlId="formSearchBar">
          <Form.Label>What word do you want to look up?</Form.Label>
          <Form.Control type="text" placeholder="Type word here..." onChange={wordChange} />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </Form>
      <Results results={results} />
    </div>
  )
}

export default Dictionary
