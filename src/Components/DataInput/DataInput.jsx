import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui'

class DataInput extends React.Component {
  constructor () {
    super();
    this.state = {
      value: '',
      error: false
    }
  }

  onChange = ({target}) => {
    const regex = /[^0-9,. ]/g;
    const {value} = target;
    this.setState({value: value.replace(regex, '')});
    const data = [];
    value.split(',').forEach((item) => {
      const parsedNumber = parseFloat(item);
      if (parsedNumber) {
        data.push(parseFloat(parsedNumber))
      }
    });
    if (data && data.length) {
      this.props.onChange(data);
    }
  };

  render () {
    const {value, error} = this.state;
    return (
      <TextField
        style={styles}
        value={value}
        errorText={error ? 'Incorrect input format' : null}
        onChange={this.onChange}
        floatingLabelText='Enter tree data'
        multiLine={true}/>
    )
  }
}

const styles = {
  width: "100%",
};

DataInput.propTypes = {
  onChange: PropTypes.func,
};

export default DataInput;
