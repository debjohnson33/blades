import React from 'react';

class BladeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stens: '',
      quantity: 0
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
    this.props.onSubmit(e, this.state.name, this.state.stens, this.state.quantity);
    this.setState({
      name: '',
      stens: '',
      quantity: 0
    })
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <p>Enter Blade Name</p>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p>Blade Stens</p>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={this.state.stens}
        />
        <p>Blade Quantity</p>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={this.state.quantity}
        />
        <br></br>
        <input type='submit' />
      </form>
    )
  }
}

export default BladeForm;