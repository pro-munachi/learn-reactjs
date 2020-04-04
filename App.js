import React from 'react'
import "./App.css"
import todo from './Tododata'
import TodoFile from './TodoFile'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todo 
    }
    
  }
  render() {
    const doit = this.state.todos.map(item => <TodoFile key={item.id} item ={item}/>)
    return (
      <div className="App">
  <p>{doit}</p>
      </div>
    )
  }
}

export default App;
