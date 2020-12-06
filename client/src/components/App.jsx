import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goats: [],
      currentGoat: {}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/goats')
      .then(res => {
        const goats = res.data;
        this.setState({
          goats: goats,
          currentGoat: goats[0]
        });
      });
  }

  render() {
    const { goats } = this.state;
    return (
      <div>
        <h1>Goats List!</h1>
        {goats.map(goat => <div><li>{goat.name}</li> <p>{goat.description}</p></div>)}
      </div>
    )
  }
}

export default App;