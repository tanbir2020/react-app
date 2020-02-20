import React, {Component} from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component.jsx';
import { SearchBox } from './component/search-box/search-box.component.jsx';

class App extends Component {

  constructor() {
    super();
    this.state= {
      monsters: [],
      filteredMonsters:[]
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {
                        this.setState({monsters:response});
                        this.setState({filteredMonsters:response})
                      }
                )
  }

  handleChange = (e) => {
    const {monsters} = this.state;
    this.setState({filteredMonsters : monsters.filter(monster=> monster.name.toLowerCase().includes(e.target.value.toLowerCase()))});
  }

  render() {
    const { filteredMonsters} = this.state;

  return (
    <div className="App">
      <SearchBox handler={this.handleChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
