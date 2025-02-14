import './App.css';
import Selector from './Selector';
function App() {
  const multiOptions = [
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
    { value: '3', text: 'Option 3' },
    { value: '4', text: 'Option 4' },
    { value: '5', text: 'Option 5' },
    { value: '6', text: 'Option 6' },
    { value: '7', text: 'Option 7' },
    { value: '8', text: 'Option 8' },
    { value: '9', text: 'Option 9' },
    { value: '10', text: 'Option 10' },
    { value: '11', text: 'Option 11' },
    { value: '12', text: 'Option 12' },
  ]

  const singleOptions = [
    { value: 'Jake', text: 'Jake' },
    { value: 'Jack', text: 'Jack' },
    { value: 'Jill', text: 'Jill' },
    { value: 'John', text: 'John' },
    { value: 'Jacob', text: 'Jacob' },
    { value: 'Jason', text: 'Jason' },
  ]
  return (
    <div className="App">
      <header>
        Multi Selector
        <Selector isMulti={true} selectOptions={multiOptions}/>
      </header>
      <div>
      Single Selector

      <Selector isMulti={false} selectOptions={singleOptions}/>
      </div>
    </div>
  );
}

export default App;
