import React from 'react';
import PropTypes from 'prop-types';
import TreeNode from '../../Components/TreeNode/TreeNode.jsx';

class TreeContainer extends React.Component {

  static renderTreeNode (treeData) {
    if (!treeData || !treeData.value) {
      return null;
    }
    return (
      <TreeNode nodeData={treeData.value}>
        {treeData.left ? this.renderTreeNode(treeData.left) : null}
        {treeData.right ? this.renderTreeNode(treeData.right) : null}
      </TreeNode>
    )
  }

  render() {
    const { treeData } = this.props;
    return TreeContainer.renderTreeNode(treeData);
  }
}

TreeContainer.propTypes = {
  treeData: PropTypes.object
};

export default TreeContainer;
