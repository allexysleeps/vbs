import React from 'react';
import PropTypes from 'prop-types';
import './TreeNode.sass';

class TreeNode extends React.Component {
  componentDidMount() {
  }
  render() {
    const { nodeData, children } = this.props;
    return (
      <div className="TreeNode" ref={(Node) => this.TreeNodeRef = Node}>
        <div className="node-value">{nodeData}</div>
        <div className="node-children">
          {children}
        </div>
      </div>
    )
  }
}

TreeNode.propTypes = {
  nodeData: PropTypes.number
};

export default TreeNode;
