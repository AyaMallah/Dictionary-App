import { Form, Button } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formSearchBar">
          <Form.Label>What word do you want to look up?</Form.Label>
          <Form.Control type="text" placeholder="Type word here..." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

    </div>
  );
}

export default App;
