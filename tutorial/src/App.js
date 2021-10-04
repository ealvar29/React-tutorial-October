import './App.css';

function App() {
  let test1 = "Testing This let variable"
  const test2 = 20
  test1 = 30


  return (
    <div className="App">
      <header className="App-header">
        <p>
          {test1}
        </p>
      </header>
    </div>
  );
}

export default App;
