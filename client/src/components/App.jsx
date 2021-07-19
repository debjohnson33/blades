import React from 'react';
import axios from 'axios';

import BladeList from './BladeList.jsx';
import BladeDetails from './BladeDetails.jsx';
import BladeForm from './BladeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blades: [],
      currentBlade: {}
    }
    this.selectBlade = this.selectBlade.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/blades')
      .then(res => {
        const blades = res.data;
        console.log(blades);
        this.setState({
          blades: blades,
          currentBlade: blades[0]
        });
      });
  }

  onSubmit(e, stens, quantity, manufacturer) {
    console.log('Submitted: ', stens, quantity, manufacturer);
    const blade = {stens: stens, quantity: quantity, manufacturer: manufacturer};
    e.preventDefault();
    this.setState(previousState => {
      return { blades: [...previousState.blades, blade]}
    });
    axios.post('http://localhost:3000/api/blades', blade)
      .then(res => {
        if (res.data.affectedRows === 1) {
          this.setState(previousState => {
            return { blades: [...previousState.blades, blade]}
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  selectBlade(blade) {
    this.setState({
      currentBlade: blade
    });
  }

  render() {
    const { blades, currentBlade } = this.state;
    return (
      <div>
        <h1>Blade List</h1>
        <BladeDetails blade={currentBlade || blades[0]} />
        <BladeList blades={blades} selectBlade={this.selectBlade} />
        <BladeForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default App;