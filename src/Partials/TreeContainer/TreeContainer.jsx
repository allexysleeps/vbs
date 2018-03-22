import React from 'react';
import PropTypes from 'prop-types';
import TreeNode from '../../Components/TreeNode/TreeNode.jsx';
import './TreeContainer.sass';

class TreeContainer extends React.Component {

  static renderTreeNode (treeData, branch) {
    if (!treeData || !treeData.value) {
      return null;
    }
    return (
      <TreeNode nodeData={treeData.value} branch={branch}>
        {treeData.left ? this.renderTreeNode(treeData.left, "left") : null}
        {treeData.right ? this.renderTreeNode(treeData.right, "right") : null}
      </TreeNode>
    )
  }

  render() {
    const { treeData } = this.props;
    return (
      <div className="TreeContainer">
        {TreeContainer.renderTreeNode(treeData)}
      </div>
    )
  }
}

TreeContainer.propTypes = {
  treeData: PropTypes.object
};

export default TreeContainer;
