import React from 'react';
import axios from 'axios';

import GoatList from './GoatList.jsx';
import GoatDetails from './GoatDetails.jsx';
import GoatForm from './GoatForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goats: [],
      currentGoat: {}
    }
    this.selectGoat = this.selectGoat.bind(this);
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

  onSubmit(e, name, description) {
    console.log('Submitted: ', name, description);
    const goat = {name: name, description: description};
    e.preventDefault();
    this.setState(previousState => {
      return { goats: [...previousState.goats, goat]}
    });
    axios.post('http://localhost:3000/api/goats', goat)
      .then(res => {
        if (res.data.affectedRows === 1) {
          this.setState(previousState => {
            return { goats: [...previousState.goats, goat]}
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  selectGoat(goat) {
    this.setState({
      currentGoat: goat
    });
  }

  render() {
    const { goats, currentGoat } = this.state;
    return (
      <div>
        <h1>Goats List!</h1>
        <GoatDetails goat={this.state.currentGoat || this.state.goats[0]} />
        <GoatList goats={goats} selectGoat={this.selectGoat} />
        <GoatForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default App;