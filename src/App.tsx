import React, { Component, ReactNode, ChangeEvent } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css'


type AppProperties = {}

interface Monster {
  name: string
  id: string
}

type AppState = {
  monsters: Monster[],
  searchField: string
}

export default class App extends Component<AppProperties, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render(): ReactNode {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters' handleEvent={(e: ChangeEvent<HTMLInputElement>) => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
