import React from 'react';
import PropTypes from 'prop-types';
import './TreeNode.sass';
import ConnectionLine from '../ConnectionLine/ConnectionLine.jsx';

class TreeNode extends React.Component {
  constructor () {
    super();
    this.state = {
      nodeCenter: null,
      leftChild: null,
      rightChild: null,
    }
  }

  static getCenterCoordinates = (node) => {
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = node;
    return {centerX: offsetLeft + offsetWidth / 2, centerY: offsetTop + offsetHeight / 2};
  };

  getChildNode = (child, branch) => {
    this.setState({
      [`${branch}Child`]: child
    })
  };

  componentDidMount() {
    const nodeCenter = TreeNode.getCenterCoordinates(this.TreeNodeRef);
    this.setState({
      nodeCenter
    });
    this.props.returnNode(nodeCenter, this.props.branch);
  }

  render() {
    const { nodeData, children } = this.props;
    const { leftChild, rightChild, nodeCenter } = this.state;
    return (
      <div className="TreeNode" >
        <div className="node-value" ref={(Node) => this.TreeNodeRef = Node}>{nodeData}</div>
        {
          leftChild ? <ConnectionLine start={nodeCenter} end={leftChild}/> : null
        }
        {
          rightChild ? <ConnectionLine start={nodeCenter} end={rightChild}/> : null
        }
        <div className="node-children">
          {
            React.Children.map(children, (child) => {
              if (child !== null) {
                return React.cloneElement(child, {returnNode: this.getChildNode})
              }
            }, this)
          }
        </div>
      </div>
    )
  }
}

TreeNode.defaultProps = {
  returnNode: () => null
};

TreeNode.propTypes = {
  nodeData: PropTypes.number,
  returnNode: PropTypes.func,
  branch: PropTypes.oneOf(["left", "right"])
};

export default TreeNode;
