import Dictionary from "./Dictionary"
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header>
          <h1 id="header" >Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="sunset" />
        </main>
        <footer>Coded by <a id="github" href="https://github.com/AyaMallah/Dictionary-App">Aya</a></footer>
      </div>
    </div>
  );
}

export default App;
