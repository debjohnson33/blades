import React from 'react';

class BladeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stens: '',
      quantity: 0,
      manufacturer: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  }

  submit(e) {
    this.props.onSubmit(e, this.state.stens, this.state.quantity, this.state.manufacturer);
    this.setState({
      stens: '',
      quantity: 0,
      manufacturer: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <h2>Enter the New Blade information</h2>
        <p>Blade Stens</p>
        <input
          type="text"
          name="stens"
          onChange={this.handleChange}
          value={this.state.stens}
        />
        <p>Blade Quantity</p>
        <input
          type="text"
          name="quantity"
          onChange={this.handleChange}
          value={this.state.quantity}
        />
        <p>Blade Manufacturer</p>
        <input
          type="text"
          name="manufacturer"
          onChange={this.handleChange}
          value={this.state.manufacturer}
        />
        <br></br>
        <input type='submit' />
      </form>
    )
  }
}

export default BladeForm;