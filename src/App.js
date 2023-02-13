import logo from './logo.svg';
import TodoItem from './Components/TodoItem';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
      {id:1, text:'Sacar la basura'},
      {id:2, text:'Pasear al perro'},
      {id:3, text:'Cerrar las puertas'},
    ],
    newTodo: '',
  };

}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO</h1> 
        <ul>
           {this.state.todos.map((todo) => {
            return (
              <li key={todo.id} class="lil">
                <TodoItem text={todo.text}/>
                <input class="checkbox" type="checkbox"/>
              </li>
            );
          })}
        </ul>
        <h1> Hola React Taller-02</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newTodo} onChange={this.handleChange}/>
          <button type='submit'>ADD TODO</button>
        </form>
      </header>
    </div>
  );
}

  handleChange = (event)=>{
    this.setState({ newTodo: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState( prevState => ({
      todos: [...prevState.todos,{id: Date.now(), text: prevState.newTodo}],
      newTodo: '',
    }));
  }
}

export default App;
