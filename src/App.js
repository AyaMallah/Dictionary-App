import Dictionary from "./Dictionary"
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer>Coded by Aya</footer>
      </div>
    </div>
  );
}

export default App;
