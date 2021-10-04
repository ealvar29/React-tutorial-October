import './App.css';

function App() {
  let stringVariable = "Testing old school functions";
  const test2 = 20;
  let numberVariable = 100;
  let booleanVariable = true;
                        //  0         1     2     3
  let arrayVariable = ["javascript", 30, true, Date()];

//functon declaration - function name
  function oldSchoolFunction() {
    let oldSchool = "Old School variable"
    return oldSchool;
  }
                        
  const arrowFunction = (a,b,c) => {
    return a + b + c
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{arrowFunction("string1","string2", "string3")}</p>
      </header>
    </div>
  );
}

export default App;
