import React from 'react';
import PropTypes from 'prop-types';
import DataInput from '../../Components/DataInput/DataInput.jsx';
import {RaisedButton} from 'material-ui';


class DataForm extends React.Component {
  constructor () {
    super();
    this.state = {
      data: null
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {data} = this.state;
    if (data) {
      this.props.onSubmit(data);
    }
  };

  onDataChange = (data) => {
    this.setState({data});
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={styles}>
        <DataInput onChange={this.onDataChange}/>
        <RaisedButton type="submit" label="Submit"/>
      </form>
    )
  }
}

const styles = {
  width: "400px",
  margin: "30px auto 0"
};

DataForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default DataForm;
