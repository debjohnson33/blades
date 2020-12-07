import React from 'react';

class GoatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
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
    this.props.onSubmit(e, this.state.name, this.state.description);
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <p>Enter Goat Name</p>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p>Goat Description</p>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <br></br>
        <input type='submit' />
      </form>
    )
  }
}

export default GoatForm;