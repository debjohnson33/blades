import React from 'react';
import axios from 'axios';

import BladeList from './BladeList.jsx';
import BladeDetails from './BladeDetails.jsx';
import BladeForm from './BladeForm.jsx';
import EditBladeForm from './EditBladeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blades: [],
      currentBlade: {},
      editMode: false
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
    axios.post('http://localhost:3000/api/blade', blade)
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

  onSubmitEdit(e, stens, quantity, manufacturer) {
    console.log('Submitted: ', stens, quantity, manufacturer);
    const blade = {stens: stens, quantity: quantity, manufacturer: manufacturer};
    e.preventDefault();
    this.setState(previousState => {
      return { blades: [...previousState.blades, blade]}
    });
    axios.put('http://localhost:3000/api/blade/:id', blade)
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

  selectEditMode(bladeId) {
    this.setState({
      editMode: !this.state.editMode
    });
    console.log("bladeId: ", bladeId);
  }

  render() {
    const { blades, currentBlade, editMode } = this.state;
    return (
      <div>
        <h1>Blade List</h1>
        <BladeDetails blade={currentBlade || blades[0]} selectEditMode={this.selectEditMode.bind(this)} />
        <BladeList blades={blades} selectBlade={this.selectBlade} />
        {editMode ? <EditBladeForm onSubmit={this.onSubmitEdit.bind(this)}/> : <BladeForm onSubmit={this.onSubmit.bind(this)}/>}
      </div>
    )
  }
}

export default App;