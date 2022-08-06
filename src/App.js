import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Class based
class App extends Component {
  constructor () {
    super();

    this.state = {
       name: {firstName : 'Javed', lastName: 'Khan'},
       company: 'Faham Pvt.',
       monsters: [
        {name: 'John', id: 'asd23'},
        {name: 'Hulk', id: 'asd21'},
        {name: 'Rocky', id: 'asd25'},
        {name: 'Modi', id: 'asd258s'}
       ],
       newMonster: []
    }
    console.log('constructor')
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return { newMonster : users }
    }))
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</h1>
          <p>
            Start building an app currently name it <b>Fundraiser App</b> and that is for my higher education.
          </p>
          <button onClick={() => {
            this.setState(
              () => {
                return {
                  name: {
                    firstName : 'Faham', lastName: 'Javed'
                  }
                }
              },
              () => {
                console.log(this.state)
              }
            );
          }}>Change Name</button>
        </header> */}
        {/* {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })} */}
        {this.state.newMonster.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    );
  }
}

export default App;

// functional way of using in react
// function App() {
//   return (
//     HTML goes here
//   )
// }